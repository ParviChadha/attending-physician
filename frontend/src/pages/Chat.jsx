import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

const starterTemplates = [
  {
    title: 'Chest pain triage',
    body: `This is a 65-year-old male presenting with substernal chest pressure that started 2 hours ago while watching TV.
The pain is heavy, radiates to his left arm, and is associated with diaphoresis and mild shortness of breath.
He has hypertension, hyperlipidemia, and a 30 pack-year smoking history. Vitals: 150/90, HR 95, RR 20, O2 94% on room air.
I think this is acute coronary syndrome and would start ASA, get EKG, troponin, and a chest x-ray.`,
  },
  {
    title: 'Acute neuro deficit',
    body: `29-year-old female with sudden onset right-sided weakness and facial droop that began 45 minutes ago while at work.
No trauma, no anticoagulants. PMH notable for migraine, on OCPs. Vitals stable, neuro exam shows expressive aphasia and 2/5 strength in right upper extremity.
Plan: activate stroke code, obtain non-contrast head CT, labs, and prepare for thrombolytics pending imaging.`,
  },
  {
    title: 'Post-op fever',
    body: `56-year-old female POD#2 after laparoscopic cholecystectomy with Tmax 101.6°F.
Complains of RUQ discomfort, HR 110, BP stable, incision sites clean. Labs pending, WBC 14.
Concerned for retained stone vs bile leak vs atelectasis. Need to prioritize labs, RUQ ultrasound, blood cultures, and early empiric antibiotics if hemodynamics change.`,
  },
]

const quickReplies = [
  'I would escalate with serial troponins and continuous telemetry.',
  'Consider PE vs aortic pathology based on risk factors.',
  'My next diagnostic step would be focused bedside ultrasound.',
  'I would reassess vitals after analgesia and formal imaging.',
]

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? ''
const SESSION_KEY = 'ap-chat-session'

function ChatPage() {
  const backendConfigured = Boolean(API_BASE_URL)
  const [sessionId, setSessionId] = useState(() => localStorage.getItem(SESSION_KEY) ?? '')
  const [chatMessages, setChatMessages] = useState([])
  const [pendingQuestions, setPendingQuestions] = useState([])
  const [metricsStatus, setMetricsStatus] = useState(null)
  const [metricsSummary, setMetricsSummary] = useState(null)
  const [presentationInput, setPresentationInput] = useState(starterTemplates[0].body)
  const [answerInput, setAnswerInput] = useState('')
  const [chatStatus, setChatStatus] = useState({ state: 'idle', message: '' })
  const [sessionMeta, setSessionMeta] = useState(null)
  const [loadingSession, setLoadingSession] = useState(false)

  useEffect(() => {
    if (!sessionId || !backendConfigured) return
    fetchSession(sessionId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId, backendConfigured])

  const fetchSession = async (id, options = {}) => {
    const { quiet = false } = options
    if (!backendConfigured || !id) return
    if (!quiet) setLoadingSession(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat/sessions/${id}`)
      if (!response.ok) {
        if (response.status === 404) {
          handleResetSession()
          throw new Error('Session expired. Start a new one to keep practicing.')
        }
        const payload = await response.json().catch(() => ({}))
        throw new Error(payload?.detail ?? 'Unable to load session.')
      }

      const payload = await response.json()
      hydrateFromState(payload)
      setChatStatus({ state: 'idle', message: '' })
    } catch (error) {
      setChatStatus({ state: 'error', message: error.message })
    } finally {
      if (!quiet) setLoadingSession(false)
    }
  }

  const hydrateFromState = (payload) => {
    const derived = transformSessionState(payload?.state)
    setChatMessages(derived.messages)
    setPendingQuestions(derived.pending)
    setMetricsStatus(derived.metricsStatus)
    setMetricsSummary(derived.metricsSummary)
    setSessionMeta({
      status: payload.status,
      sessionId: payload.session_id,
      createdAt: payload.created_at,
      updatedAt: payload.updated_at,
      interactions: derived.interactionCount,
    })
  }

  const handleResetSession = () => {
    setSessionId('')
    localStorage.removeItem(SESSION_KEY)
    setChatMessages([])
    setPendingQuestions([])
    setMetricsStatus(null)
    setMetricsSummary(null)
    setAnswerInput('')
    setSessionMeta(null)
  }

  const handleStartSession = async () => {
    if (!backendConfigured) {
      setChatStatus({ state: 'error', message: 'Set VITE_API_BASE_URL to your FastAPI deployment first.' })
      return
    }

    if (!presentationInput.trim()) {
      setChatStatus({ state: 'error', message: 'Paste or type the student presentation to begin.' })
      return
    }

    setChatStatus({ state: 'loading', message: 'Evaluating the presentation...' })
    setLoadingSession(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ presentation: presentationInput }),
      })

      const payload = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(payload?.detail ?? 'Unable to start a session right now.')
      }

      localStorage.setItem(SESSION_KEY, payload.session_id)
      setSessionId(payload.session_id)
      setChatStatus({ state: 'success', message: 'Session initialized. Answer the first prompt when ready.' })
    } catch (error) {
      setChatStatus({ state: 'error', message: error.message ?? 'Failed to reach the backend.' })
      setLoadingSession(false)
    }
  }

  const handleSendAnswer = async () => {
    if (!sessionId) {
      setChatStatus({ state: 'error', message: 'Start a session to unlock the prompts.' })
      return
    }

    if (!answerInput.trim()) {
      setChatStatus({ state: 'error', message: 'Type your reasoning before sending.' })
      return
    }

    setChatStatus({ state: 'loading', message: 'Scoring your answer...' })

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat/sessions/${sessionId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer: answerInput }),
      })

      const payload = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(payload?.detail ?? 'Unable to process that answer.')
      }

      await fetchSession(sessionId, { quiet: true })
      const completed = payload?.response?.data?.type === 'session_complete'
      setChatStatus({
        state: 'success',
        message: completed ? 'Session complete — check your summary on the right.' : 'Feedback ready for the next prompt.',
      })
      setAnswerInput('')
    } catch (error) {
      setChatStatus({ state: 'error', message: error.message ?? 'Something went wrong.' })
    }
  }

  const handleTemplateSelect = (template) => {
    setPresentationInput(template.body)
  }

  const handleQuickReplyInsert = (snippet) => {
    setAnswerInput((prev) => (prev ? `${prev} ${snippet}` : snippet))
  }

  const sessionComplete = Boolean(sessionMeta && sessionMeta.status && sessionMeta.status !== 'active')

  return (
    <div className="app chat-page">
      <header className="chat-page__header">
        <div>
          <p className="eyebrow">Live chatbot</p>
          <h1>Coach the resident with conversational guardrails.</h1>
          <p>Paste a real presentation, let the attending probe, and track the nine-metric rubric live.</p>
        </div>
        <Link className="btn secondary" to="/">
          ← Back to marketing site
        </Link>
      </header>

      <section className="chat-shell" id="live-demo">
        <div className="chat-panel">
          <header className="chat-panel__header">
            <div>
              <h2>Interactive session</h2>
              <p>Each prompt and evaluation comes straight from the Anthropic workflow wired into the backend.</p>
            </div>
            <div className="session-actions">
              {sessionId && (
                <button type="button" onClick={handleResetSession}>
                  Reset session
                </button>
              )}
              {sessionId && (
                <button type="button" onClick={() => fetchSession(sessionId)}>
                  Sync state
                </button>
              )}
            </div>
          </header>

          <div className="chat-panel__body">
            <div className="chat-timeline">
              {loadingSession && <div className="chat-skeleton">Loading the transcript…</div>}
              {!loadingSession && chatMessages.length === 0 && (
                <div className="chat-empty">
                  <p>Drop a case presentation to see how the attending probes for reasoning.</p>
                  <small>Each conversation is stored server-side with Anthropic JSON responses.</small>
                </div>
              )}

              {chatMessages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}

              {sessionId && chatStatus.state === 'loading' && (
                <div className="typing-indicator">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span>Attending is thinking…</span>
                </div>
              )}
            </div>

            <div className="chat-input">
              {!sessionId && (
                <>
                  <label>
                    Student presentation
                    <textarea
                      value={presentationInput}
                      onChange={(event) => setPresentationInput(event.target.value)}
                      placeholder="Paste the case presentation to kick things off."
                      rows={10}
                    />
                  </label>
                  <div className="starter-templates">
                    {starterTemplates.map((template) => (
                      <button key={template.title} type="button" onClick={() => handleTemplateSelect(template)}>
                        {template.title}
                      </button>
                    ))}
                  </div>
                  {!backendConfigured && (
                    <p className="contact__notice">
                      Tip: set <code>VITE_API_BASE_URL</code> so the demo can call your FastAPI backend.
                    </p>
                  )}
                  <button className="btn primary" type="button" onClick={handleStartSession} disabled={loadingSession}>
                    {loadingSession ? 'Contacting attending…' : 'Start evaluation'}
                  </button>
                </>
              )}

              {sessionId && (
                <>
                  <div className="pending-prompts">
                    <p className="eyebrow">Active prompts</p>
                    {pendingQuestions.length === 0 && !sessionComplete && (
                      <div className="pending-card waiting">Waiting for the attending to send the next question…</div>
                    )}
                    {pendingQuestions.map((prompt) => (
                      <PromptCard key={prompt.id} prompt={prompt} />
                    ))}
                    {sessionComplete && (
                      <div className="pending-card success">Session finished — use Reset to try another case.</div>
                    )}
                  </div>
                  {!sessionComplete && (
                    <>
                      <label>
                        Your answer
                        <textarea
                          value={answerInput}
                          onChange={(event) => setAnswerInput(event.target.value)}
                          rows={6}
                          placeholder="Explain your reasoning, include differentials, and share the next diagnostic or management steps."
                        />
                      </label>
                      <div className="quick-replies">
                        {quickReplies.map((snippet) => (
                          <button key={snippet} type="button" onClick={() => handleQuickReplyInsert(snippet)}>
                            {snippet}
                          </button>
                        ))}
                      </div>
                      <button
                        className="btn primary"
                        type="button"
                        onClick={handleSendAnswer}
                        disabled={chatStatus.state === 'loading'}
                      >
                        {chatStatus.state === 'loading' ? 'Scoring…' : 'Submit answer'}
                      </button>
                    </>
                  )}
                </>
              )}

              {chatStatus.message && <p className={`status status--${chatStatus.state}`}>{chatStatus.message}</p>}
            </div>
          </div>
        </div>

        <aside className="chat-sidebar">
          <div className="session-meta">
            <div className="session-row">
              <span>Status</span>
              <span className={`session-badge session-badge--${sessionMeta?.status ?? 'idle'}`}>
                {sessionMeta?.status ?? 'idle'}
              </span>
            </div>
            <div className="session-row">
              <span>Interactions</span>
              <strong>{sessionMeta?.interactions ?? 0}</strong>
            </div>
            <div className="session-row">
              <span>Updated</span>
              <span>{formatTimestamp(sessionMeta?.updatedAt)}</span>
            </div>
            {sessionMeta?.sessionId && (
              <button type="button" className="session-copy" onClick={() => navigator.clipboard?.writeText(sessionMeta.sessionId)}>
                Copy session ID
              </button>
            )}
          </div>

          <div className="metrics-panel">
            <h3>Rubric progress</h3>
            <p>Track all nine attending-grade metrics in real time.</p>
            {metricsSummary ? (
              <div className="metrics-summary">
                {['met', 'partial', 'missing'].map((key) => (
                  <div key={key}>
                    <span className={`metric-pill metric-pill--${key}`}>{key}</span>
                    <strong>{metricsSummary[key] ?? 0}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p className="metrics-placeholder">Kick off a session to unlock the tracker.</p>
            )}
            {metricsStatus && (
              <ul className="metrics-list">
                {Object.entries(metricsStatus).map(([metricId, metric]) => (
                  <li key={metricId}>
                    <div className="metric-header">
                      <span>{metric.name}</span>
                      <span className={`metric-pill metric-pill--${metric.status}`}>{metric.status}</span>
                    </div>
                    <div className="metric-bar">
                      <div className="metric-bar__fill" style={{ width: `${Math.round((metric.confidence ?? 0) * 100)}%` }} />
                    </div>
                    <small>Confidence {Math.round((metric.confidence ?? 0) * 100)}%</small>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </section>
    </div>
  )
}

function MessageBubble({ message }) {
  const [showDetails, setShowDetails] = useState(message.variant === 'initial')
  const isAssistant = message.role === 'assistant'

  const handleCopy = async () => {
    if (!navigator?.clipboard) return
    try {
      await navigator.clipboard.writeText(message.content)
    } catch (error) {
      console.error('Unable to copy text', error)
    }
  }

  const hasDetails = Boolean(
    (message.variant === 'question' && (message.meta?.followUpHint || message.meta?.acceptableCriteria)) ||
      (message.variant === 'evaluation' && (message.meta?.strengths?.length || message.meta?.weaknesses?.length)) ||
      (message.variant === 'initial' && message.meta?.priorityGaps?.length),
  )

  return (
    <article className={`message message--${message.role} message--${message.variant}`}>
      <div className="message__avatar">{isAssistant ? 'AP' : 'You'}</div>
      <div className="message__body">
        <div className="message__header">
          <strong>{isAssistant ? 'Attending' : 'You'}</strong>
          {message.meta?.metricTarget && <span className="metric-tag">{message.meta.metricTarget}</span>}
          <div className="message__actions">
            <button type="button" onClick={handleCopy}>
              Copy
            </button>
            {hasDetails && (
              <button type="button" onClick={() => setShowDetails((prev) => !prev)}>
                {showDetails ? 'Hide details' : 'Show details'}
              </button>
            )}
          </div>
        </div>
        <p>{message.content}</p>

        {showDetails && message.variant === 'question' && (
          <div className="message__details">
            {message.meta?.followUpHint && (
              <p>
                <strong>Hint:</strong> {message.meta.followUpHint}
              </p>
            )}
            {message.meta?.acceptableCriteria && (
              <p>
                <strong>Great answers mention:</strong> {message.meta.acceptableCriteria}
              </p>
            )}
          </div>
        )}

        {showDetails && message.variant === 'evaluation' && (
          <div className="message__details">
            <p>
              <strong>Status:</strong> {message.meta?.status}
            </p>
            {message.meta?.strengths?.length > 0 && (
              <p>
                <strong>Strengths:</strong> {message.meta.strengths.join(', ')}
              </p>
            )}
            {message.meta?.weaknesses?.length > 0 && (
              <p>
                <strong>Opportunities:</strong> {message.meta.weaknesses.join(', ')}
              </p>
            )}
            {message.meta?.nextAction && (
              <p>
                <strong>Next action:</strong> {message.meta.nextAction}
              </p>
            )}
          </div>
        )}

        {showDetails && message.variant === 'initial' && (
          <div className="message__details">
            <p>
              <strong>Priority gaps:</strong> {message.meta?.priorityGaps?.join(', ') || 'None'}
            </p>
          </div>
        )}
      </div>
    </article>
  )
}

function PromptCard({ prompt }) {
  return (
    <article className="pending-card">
      <header>
        <strong>{prompt.metricTarget || 'Follow-up question'}</strong>
        <span>{prompt.question}</span>
      </header>
      <p>
        <strong>Hint:</strong> {prompt.followUpHint || 'Respond with your reasoning to continue.'}
      </p>
      {prompt.acceptableCriteria && (
        <p>
          <strong>Rubric:</strong> {prompt.acceptableCriteria}
        </p>
      )}
    </article>
  )
}

function formatTimestamp(value) {
  if (!value) return '—'
  const date = new Date(value)
  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function transformSessionState(state) {
  if (!state) {
    return {
      messages: [],
      pending: [],
      metricsStatus: null,
      metricsSummary: null,
      interactionCount: 0,
    }
  }

  const messages = []
  if (state.initial_evaluation) {
    messages.push({
      id: 'initial-eval',
      role: 'assistant',
      variant: 'initial',
      content: state.initial_evaluation.overall_assessment ?? 'Let’s explore your clinical reasoning.',
      meta: {
        priorityGaps: state.initial_evaluation.priority_gaps,
      },
    })
  }

  const history = state.conversation_history ?? []
  history.forEach((turn, index) => {
    messages.push({
      id: `assistant-question-${index}`,
      role: 'assistant',
      variant: 'question',
      content: turn.question,
      meta: {
        metricTarget: turn.question_obj?.metric_target,
        followUpHint: turn.question_obj?.follow_up_hint,
        acceptableCriteria: turn.question_obj?.acceptable_criteria,
      },
    })

    if (turn.answer) {
      messages.push({
        id: `user-answer-${index}`,
        role: 'user',
        variant: 'answer',
        content: turn.answer,
      })
    }

    if (turn.evaluation) {
      messages.push({
        id: `assistant-eval-${index}`,
        role: 'assistant',
        variant: 'evaluation',
        content: turn.evaluation.feedback,
        meta: {
          metricTarget: turn.evaluation.metric,
          status: turn.evaluation.status,
          strengths: turn.evaluation.strengths,
          weaknesses: turn.evaluation.weaknesses,
          nextAction: turn.evaluation.next_action,
        },
      })
    }
  })

  const pending = history
    .filter((turn) => !turn.answer && turn.question)
    .map((turn, index) => ({
      id: `pending-${index}`,
      question: turn.question,
      metricTarget: turn.question_obj?.metric_target,
      followUpHint: turn.question_obj?.follow_up_hint,
      acceptableCriteria: turn.question_obj?.acceptable_criteria,
    }))

  const metricsStatus = state.metrics_status ?? null
  const metricValues = metricsStatus ? Object.values(metricsStatus) : []
  const summary = metricsStatus
    ? metricValues.reduce(
        (acc, metric) => {
          acc[metric.status] = (acc[metric.status] ?? 0) + 1
          acc.total += 1
          return acc
        },
        { met: 0, partial: 0, missing: 0, total: 0 },
      )
    : null

  return {
    messages,
    pending,
    metricsStatus,
    metricsSummary: summary,
    interactionCount: state.interaction_count ?? 0,
  }
}

export default ChatPage

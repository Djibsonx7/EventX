import { useState } from 'react'
import { motion } from 'framer-motion'

const quizQuestion = {
  title: 'Which activation goal matters most for a live brand experience?',
  answers: [
    'Audience engagement',
    'Decor only',
    'Long speeches',
    'Silent participation',
  ],
  correctIndex: 0,
}

const pollQuestion = {
  title: 'What matters most to your audience today?',
  answers: [
    'Interaction',
    'Networking',
    'Learning',
    'Rewards',
  ],
}

function getQuestionByMode(mode) {
  if (mode === 'Live Polls') return pollQuestion
  return quizQuestion
}

export default function PlayerGamePage({ mode = 'Quiz Battle Live', onBackClick }) {
  const question = getQuestionByMode(mode)
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-[#07101d] text-white">
      <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-10">
        <button
          onClick={onBackClick}
          className="mb-6 px-4 py-2 rounded-xl bg-white/8 border border-white/10 text-white/80"
        >
          ← Back
        </button>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-6">
            <div className="text-xs uppercase tracking-[0.35em] text-white/45">Player Experience</div>
            <h1 className="text-3xl sm:text-4xl font-black mt-3 leading-tight">{mode} is now live.</h1>
            <p className="mt-4 text-white/65 text-base sm:text-lg">
              Answer quickly, stay engaged, and watch the live board react to the crowd.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ['Session', 'EVX-4821'],
                ['Mode', mode],
                ['Sponsor', 'Enabled'],
                ['State', submitted ? 'Answered' : 'Live'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-4">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">{label}</div>
                  <div className="mt-2 text-sm sm:text-base font-semibold">{value}</div>
                </div>
              ))}
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-4 text-emerald-300 font-semibold"
              >
                Your answer has been submitted. Waiting for the next live moment.
              </motion.div>
            )}
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-[#11162a] to-[#091120] p-5 sm:p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Live Question</div>
            <div className="mt-3 text-2xl sm:text-3xl font-black leading-tight">{question.title}</div>

            <div className="mt-6 grid gap-4">
              {question.answers.map((answer, index) => {
                const isSelected = selected === index
                return (
                  <button
                    key={answer}
                    type="button"
                    disabled={submitted}
                    onClick={() => setSelected(index)}
                    className={`rounded-2xl border px-5 py-4 text-left transition ${
                      isSelected
                        ? 'border-fuchsia-400/40 bg-gradient-to-r from-[#2d1458] to-[#1b2341]'
                        : 'border-white/10 bg-white/[0.04] hover:border-white/20'
                    } ${submitted ? 'opacity-80 cursor-default' : ''}`}
                  >
                    <div className="font-semibold text-lg">{answer}</div>
                  </button>
                )
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                disabled={selected === null || submitted}
                onClick={() => setSubmitted(true)}
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#ec4899] font-semibold shadow-[0_0_35px_rgba(124,58,237,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
              <div className="px-5 py-4 rounded-2xl bg-white/8 border border-white/10 text-white/75 font-medium">
                Timer: 12s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

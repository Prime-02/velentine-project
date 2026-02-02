'use client';

import { useState } from 'react';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [stage, setStage] = useState('initial'); // initial, yes, no, submitted
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [confetti, setConfetti] = useState([]);

  const createConfetti = () => {
    const newConfetti = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 3000);
  };

  const handleYes = async () => {
    setStage('yes');
    createConfetti();
    setLoading(true);

    try {
      const response = await fetch('/api/send-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ response: 'yes' }),
      });

      if (response.ok) {
        setTimeout(() => setStage('submitted'), 1500);
      } else {
        setError('Failed to send response');
      }
    } catch (err) {
      setError('Error sending response');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNo = () => {
    setStage('no');
  };

  const handleSubmitNo = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/send-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ response: 'no', reason }),
      });

      if (response.ok) {
        setStage('submitted');
      } else {
        setError('Failed to send response');
      }
    } catch (err) {
      setError('Error sending response');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStage('initial');
    setReason('');
    setError('');
  };

  return (
    <main className={styles.container}>
      {/* Confetti Animation */}
      {confetti.map((item) => (
        <div
          key={item.id}
          className={styles.confetti}
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            backgroundColor: ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#ff6bcf'][
              Math.floor(Math.random() * 5)
            ],
          }}
        />
      ))}

      {/* Initial Screen */}
      {stage === 'initial' && (
        <div className={styles.content}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={`${styles.heart} heart-animation`}>💕</div>

              <h1 className={styles.title}>Will You Be My Valentine?</h1>

              <p className={styles.description}>
                You mean the world to me, and I&apos;d love to spend this special day with you.
              </p>

              <div className={styles.buttonGroup}>
                <button
                  className={styles.yesBtn}
                  onClick={handleYes}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Yes! 💖'}
                </button>

                <button
                  className={styles.noBtn}
                  onClick={handleNo}
                >
                  No 😔
                </button>
              </div>

              {error && <p className={styles.error}>{error}</p>}
            </div>
          </div>

          {/* Floating Hearts Background */}
          <div className={styles.floatingHearts}>
            <span style={{ '--delay': '0s' } as React.CSSProperties}>💗</span>
            <span style={{ '--delay': '1s' } as React.CSSProperties}>💗</span>
            <span style={{ '--delay': '2s' } as React.CSSProperties}>💗</span>
            <span style={{ '--delay': '3s' } as React.CSSProperties}>💗</span>
          </div>
        </div>
      )}

      {/* Yes Response */}
      {stage === 'yes' && (
        <div className={styles.content}>
          <div className={`${styles.responseCard} fade-in`}>
            <div className={`${styles.largeHeart} heart-animation`}>💖</div>
            <h2 className={styles.responseTitle}>You Made Me The Happiest!</h2>
            <p className={styles.responseText}>
              I can&apos;t wait to celebrate with you! ✨
            </p>
            <div className={styles.loader}></div>
            <p className={styles.submitting}>Saving your response...</p>
          </div>
        </div>
      )}

      {/* No Response */}
      {stage === 'no' && (
        <div className={styles.content}>
          <div className={`${styles.responseCard} slide-up`}>
            <div className={`${styles.sadHeart} shake`}>💔</div>
            <h2 className={styles.responseTitle}>Oh No... 😔</h2>

            <p className={styles.reasonLabel}>
              Would you mind sharing why? (optional)
            </p>

            <textarea
              className={styles.reasonInput}
              placeholder="Tell me what's on your mind..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              disabled={loading}
            />

            <div className={styles.noButtonGroup}>
              <button
                className={styles.submitBtn}
                onClick={handleSubmitNo}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Response'}
              </button>

              <button
                className={styles.backBtn}
                onClick={() => setStage('initial')}
                disabled={loading}
              >
                Go Back
              </button>
            </div>

            {error && <p className={styles.error}>{error}</p>}
          </div>
        </div>
      )}

      {/* Submitted */}
      {stage === 'submitted' && (
        <div className={styles.content}>
          <div className={`${styles.responseCard} fade-in`}>
            <div className={styles.checkmark}>✓</div>
            <h2 className={styles.responseTitle}>Response Sent!</h2>
            <p className={styles.responseText}>
              Your response has been recorded and sent to my email.
              <br />
              <br />
              Thank you for your honesty and your time! 💕
            </p>

            <button
              className={styles.resetBtn}
              onClick={handleReset}
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

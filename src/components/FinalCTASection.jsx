import React from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiArrowRight, FiShield, FiCode, FiTarget } from 'react-icons/fi'

const FinalCTASection = () => {
  return (
    <section id="cta" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.08) 0%, rgba(124,58,237,0.05) 40%, transparent 70%)'
      }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(124,58,237,0.4), transparent)' }} />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full animate-glow-pulse"
          style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Label */}
          <div className="mb-8">
            <span className="badge px-6 py-2 text-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
                border: '1px solid rgba(0,212,255,0.3)',
                color: '#00d4ff'
              }}>
              <FiZap size={13} />
              Start Today
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            <span className="text-text-primary">不要再让 AI </span>
            <span className="gradient-text-warm">猜需求</span>
            <br />
            <span className="text-text-primary">让 AI </span>
            <span className="gradient-text">执行规范</span>
          </h2>

          {/* Supporting Statements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-14"
          >
            {[
              {
                icon: FiCode,
                text: 'Claude Code 提升的是生产力',
                sub: 'AI 辅助编码，更快完成任务'
              },
              {
                icon: FiShield,
                text: 'OpenSpec 提升的是工程可靠性',
                sub: '规范驱动开发，团队可协作'
              },
              {
                icon: FiTarget,
                text: '两者结合 = 企业级 AI 编程方案',
                sub: '从工具升级，到工程体系升级'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="inline-flex items-center gap-4 mx-2 px-6 py-3 rounded-xl glass"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <item.icon size={16} className="text-accent flex-shrink-0" />
                <div className="text-left">
                  <span className="text-text-primary text-sm font-medium">{item.text}</span>
                  <span className="text-text-muted text-xs ml-2">— {item.sub}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-4"
          >
            从下一个核心需求开始，先写 Proposal。
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-text-secondary text-base mb-12"
          >
            从会用 AI，到建立 AI 工程体系，是研发组织升级的分水岭。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-base overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                boxShadow: '0 0 60px rgba(0,212,255,0.25), 0 8px 30px rgba(0,0,0,0.5)',
              }}
            >
              <span className="relative z-10 flex items-center gap-3 text-white">
                <FiZap size={18} />
                Start with OpenSpec
              </span>
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent)' }}
                animate={{ scale: [1, 1.5], opacity: [0, 0.1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-base glass overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3 text-text-primary">
                <FiShield size={18} />
                Build Controllable AI Engineering
              </span>
            </motion.button>
          </motion.div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-16 text-text-muted text-xs font-mono tracking-widest"
          >
            Claude Code + OpenSpec · Spec-driven Engineering · 企业级 AI 编程方案
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTASection

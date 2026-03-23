import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiTarget, FiZap, FiCheckCircle, FiRefreshCw, FiCode, FiFileText, FiList, FiStar, FiAlertCircle } from 'react-icons/fi'

const PhaseBar = ({ phase }) => {
  const colors = ['#4ade80', '#86efac', '#fbbf24', '#fb923c', '#ef4444']
  const labels = ['种子', '嫩芽', '小树', '成树', '大树']
  const width = [8, 22, 40, 62, 82]

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-text-muted mb-1">
        <span>🌱 {labels[0]}</span>
        <span>🌳 {labels[4]}</span>
      </div>
      <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          initial={{ width: '0%' }}
          whileInView={{ width: `${width[phase]}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${colors[0]}, ${colors[phase]})`,
            boxShadow: `0 0 10px ${colors[phase]}50`
          }}
        />
      </div>
      <p className="text-xs text-text-secondary text-right">
        当前：{labels[phase]} 阶段
      </p>
    </div>
  )
}

const ChatBubble = ({ role, text, delay = 0, isSpec = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className={`flex ${role === 'ai' ? 'justify-start' : 'justify-end'}`}
  >
    <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
      role === 'ai'
        ? isSpec
          ? 'rounded-tl-md'
          : ''
        : 'rounded-tr-md'
    }`} style={{
      background: role === 'ai'
        ? isSpec
          ? 'rgba(124,58,237,0.15)'
          : 'rgba(255,255,255,0.05)'
        : 'rgba(0,212,255,0.15)',
      border: role === 'ai'
        ? isSpec
          ? '1px solid rgba(124,58,237,0.25)'
          : '1px solid rgba(255,255,255,0.08)'
        : '1px solid rgba(0,212,255,0.2)',
      borderRadius: role === 'ai' ? '2px 16px 16px 16px' : '16px 2px 16px 16px',
    }}>
      <p className="text-text-secondary" style={{ color: role === 'ai' ? (isSpec ? '#a78bfa' : '#9ca3af') : '#67e8f9' }}>
        {text}
      </p>
    </div>
  </motion.div>
)

const DemoCaseSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="demo" className="py-32 relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.03), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">Real Case Study</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            实战案例：ForestFocus <span className="gradient-text">自定义时长</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            完整展示一个功能如何通过 Claude Code + OpenSpec 从提案到归档的全过程。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Chat Simulation */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(10,10,18,0.8)' }}
          >
            {/* Header */}
            <div className="px-6 py-4 flex items-center gap-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#10b981' }} />
              <div className="flex-1 text-center">
                <p className="text-text-muted text-xs font-mono">Claude Code + OpenSpec Session</p>
              </div>
              <div className="w-16" />
            </div>

            {/* Chat Content */}
            <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
              <ChatBubble role="user" text="我想给 ForestFocus 加一个自定义时长功能，用户可以自己设置专注多少分钟。" delay={0} />
              <ChatBubble role="ai" text="明白。这个功能涉及 UI 交互、数据存储、统计逻辑，我先了解一下背景：" delay={0.1} />
              <ChatBubble role="ai" isSpec text="goal: 支持 1-180 分钟自定义时长，超出范围提示错误。" delay={0.2} />
              <ChatBubble role="ai" isSpec text="ui: 快捷按钮 15/25/45/60/90 分钟，TimerBadge 可点击弹出底部选择器，范围 1-180。" delay={0.3} />
              <ChatBubble role="ai" isSpec text="compat: 旧数据默认 25min，向后兼容。trees 按总时长比例切 5 阶段。" delay={0.4} />
              <ChatBubble role="user" text="同意这个方案。但需要保证 badge 始终可见且可点击，哪怕只设置了 1 分钟。" delay={0.5} />
              <ChatBubble role="ai" text="收到，补充约束：duration badge 始终可见且可点击，不隐藏。这是 UX 安全底线。" delay={0.6} />
              <ChatBubble role="ai" text="Proposal 确认，开始 Apply 阶段。实现中..." delay={0.7} />
              <ChatBubble role="ai" text="✓ DurationSelector.tsx | ✓ TimerBadge.tsx | ✓ PhaseEngine.tsx | 所有任务完成，Review 通过。" delay={0.8} />
              <ChatBubble role="ai" text="规范已归档，ForestFocus-spec.md + duration-change-log.md 已更新。🎉" delay={0.9} />

              {/* Bug Fix Episode */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-6 p-4 rounded-xl"
                style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <FiRefreshCw size={12} className="text-amber-400" />
                  <span className="text-amber-400 text-xs font-semibold">Apply 中的灵活调整</span>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed">
                  实现中发现：用户设 1 分钟 → badge 变 mini → 下次找不到入口。决定将 badge 改为始终大号可见。
                  这不是违反流程，而是在 Review 前识别了真实问题并补充规范。
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Visual Elements */}
          <div className="space-y-6">
            {/* Before/After UI Mock */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-6 rounded-2xl glass"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h4 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <FiTarget size={16} className="text-accent" />
                需求对照
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="text-text-muted text-xs mb-1">Before</p>
                  <p className="text-text-secondary text-xs">固定 25 分钟</p>
                </div>
                <div className="p-3 rounded-xl" style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.15)' }}>
                  <p className="text-text-muted text-xs mb-1">After</p>
                  <p className="text-text-secondary text-xs">1~180 分钟自定义</p>
                </div>
                <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="text-text-muted text-xs mb-1">快捷设置</p>
                  <p className="text-text-secondary text-xs">—</p>
                </div>
                <div className="p-3 rounded-xl" style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.15)' }}>
                  <p className="text-text-muted text-xs mb-1">快捷设置</p>
                  <p className="text-text-secondary text-xs">15 / 25 / 45 / 60 / 90</p>
                </div>
              </div>
            </motion.div>

            {/* Duration Selector */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-6 rounded-2xl glass"
              style={{ border: '1px solid rgba(0,212,255,0.15)' }}
            >
              <h4 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <FiList size={16} className="text-accent" />
                时长选择器 UI
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {[15, 25, 45, 60, 90].map(d => (
                  <motion.button
                    key={d}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      background: d === 25 ? 'rgba(0,212,255,0.2)' : 'rgba(255,255,255,0.05)',
                      border: d === 25 ? '1px solid rgba(0,212,255,0.4)' : '1px solid rgba(255,255,255,0.08)',
                      color: d === 25 ? '#00d4ff' : '#9ca3af',
                      boxShadow: d === 25 ? '0 0 15px rgba(0,212,255,0.15)' : 'none'
                    }}
                  >
                    {d} min
                  </motion.button>
                ))}
              </div>
              <input
                type="range"
                min="1"
                max="180"
                defaultValue="25"
                className="w-full h-1 rounded-full appearance-none cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, rgba(0,212,255,0.3), rgba(124,58,237,0.3))'
                }}
              />
              <p className="text-center text-accent font-mono text-sm mt-2">25 分钟</p>
            </motion.div>

            {/* Tree Phase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="p-6 rounded-2xl glass"
              style={{ border: '1px solid rgba(16,185,129,0.15)' }}
            >
              <h4 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <FiStar size={16} className="text-green-400" />
                树木阶段（按总时长比例）
              </h4>
              <PhaseBar phase={2} />
              <p className="text-xs text-text-muted mt-3">
                总时长 60min → 阶段划分：0-12🌱 / 12-24🌿 / 24-36🌳 / 36-48🌲 / 48-60🪵
              </p>
            </motion.div>

            {/* OpenSpec Files */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.2)' }}
            >
              <h4 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <FiFileText size={16} className="text-violet-light" />
                归档文件（可追溯资产）
              </h4>
              <div className="space-y-2">
                {[
                  { name: 'ForestFocus-spec.md', type: '规范主文档', color: '#7c3aed' },
                  { name: 'duration-proposal.md', type: '本次提案', color: '#00d4ff' },
                  { name: 'duration-change-log.md', type: '变更记录', color: '#10b981' },
                  { name: 'phase-reference.md', type: '阶段参考', color: '#f59e0b' },
                ].map(f => (
                  <div key={f.name} className="flex items-center gap-3 p-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: f.color }} />
                    <div className="flex-1">
                      <p className="text-text-secondary text-xs font-mono">{f.name}</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-md" style={{ background: `${f.color}15`, color: f.color }}>{f.type}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Insight */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="p-5 rounded-xl flex items-start gap-3"
              style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)' }}
            >
              <FiAlertCircle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-text-primary text-sm font-medium mb-1">插曲：灵活的 Bug 修复</p>
                <p className="text-text-secondary text-xs leading-relaxed">
                  在 Apply 阶段发现 UX 问题（1分钟用户找不到入口），立即补充规范，而不是忽略。
                  这体现了 OpenSpec 的核心价值：流程是为人服务的，不是束缚人的。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoCaseSection

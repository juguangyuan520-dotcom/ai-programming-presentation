import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiTrendingUp, FiShield, FiGitBranch, FiUsers, FiTarget, FiClock, FiAward, FiStar } from 'react-icons/fi'

const MetricCard = ({ value, label, sublabel, delay = 0, color = '#00d4ff' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="text-center p-8 rounded-2xl glass group cursor-default"
      style={{ border: `1px solid ${color}20` }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.1, type: 'spring' }}
        className="font-display font-extrabold text-5xl lg:text-6xl mb-3"
        style={{ color, textShadow: `0 0 40px ${color}30` }}
      >
        {value}
      </motion.div>
      <p className="text-text-primary font-semibold text-base mb-1">{label}</p>
      <p className="text-text-muted text-sm">{sublabel}</p>
    </motion.div>
  )
}

const BigStatement = ({ text, sub, delay = 0, align = 'left' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className={`space-y-3 ${align === 'center' ? 'text-center' : ''}`}
    >
      <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary leading-tight">
        {text}
      </p>
      {sub && <p className="text-text-secondary text-base max-w-xl">{sub}</p>}
    </motion.div>
  )
}

const ExecutiveValueSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="value" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 60%)'
      }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">Executive Value</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            这不是前端优化，是 <span className="gradient-text">研发生产方式升级</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            面向 CEO / 管理层：从工具升级，到工程体系升级，一次认知跨越。
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          <MetricCard value="4×" label="需求追溯能力" sublabel="规范即文档，变更可查" delay={0} color="#00d4ff" />
          <MetricCard value="80%" label="无效返工减少" sublabel="Review 前发现问题" delay={0.1} color="#7c3aed" />
          <MetricCard value="∞" label="知识沉淀" sublabel="团队共享，不依赖个人" delay={0.2} color="#10b981" />
          <MetricCard value="100%" label="修改边界可控" sublabel="AI 只在规范内执行" delay={0.3} color="#f59e0b" />
        </div>

        {/* Big Statements */}
        <div className="space-y-16 max-w-5xl mx-auto">
          <BigStatement
            text="AI 编程的上限，不是模型能力，而是组织是否可控。"
            sub="Claude Code 解决了个人生产力问题；OpenSpec 解决了团队工程可控性问题。前者是工具升级，后者是范式升级。"
            delay={0.1}
          />

          <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

          <BigStatement
            text="把个人提示词能力，升级为团队工程能力。"
            sub="当团队每个成员都按 OpenSpec 工作时，AI 编程质量不再取决于个人经验，而是由流程保证。这才是可规模化的 AI 工程。"
            delay={0.2}
          />

          <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

          <BigStatement
            text="把对话式开发，升级为规范化交付系统。"
            sub="从临时会话 → 结构化 Proposal → 规范执行 → 归档沉淀。每一个核心功能都在这个闭环里运转。"
            delay={0.3}
          />

          <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

          <BigStatement
            text="长期项目越大，OpenSpec 价值越大。"
            sub="项目初期差异不明显；6个月、1年后，没有规范的项目充满技术债和不可追溯的决策；有规范的项目依然清晰可维护。"
            delay={0.4}
          />
        </div>

        {/* Value Pillars */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: FiShield, title: '可控性', desc: '修改边界清晰，AI 不自由发挥', color: '#00d4ff' },
            { icon: FiGitBranch, title: '可追溯', desc: '每项决策有文档，新人可接手', color: '#7c3aed' },
            { icon: FiUsers, title: '团队标准化', desc: '统一流程，不依赖个人经验', color: '#10b981' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl glass group"
              style={{ border: `1px solid ${item.color}15` }}>
              <div className="p-3 rounded-xl flex-shrink-0" style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}>
                <item.icon size={20} style={{ color: item.color }} />
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 px-12 py-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05))',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
            <p className="font-display font-bold text-xl sm:text-2xl text-text-primary leading-relaxed max-w-2xl">
              "Claude Code 提升的是< span className="gradient-text">生产力</span>，
              OpenSpec 提升的是< span className="gradient-text">工程可靠性</span>。"
            </p>
            <p className="text-text-muted text-sm">
              两者结合，才是企业级 AI 编程方案。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExecutiveValueSection

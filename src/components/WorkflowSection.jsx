import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiFileText, FiCheckCircle, FiCode, FiArchive, FiArrowRight, FiHelpCircle, FiEdit, FiSliders, FiBook } from 'react-icons/fi'

const StepCard = ({ number, icon: Icon, title, subtitle, items, color, delay = 0, isLast = false }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-8"
    >
      {/* Left: Number & Line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
          style={{ background: `rgba(${color}, 0.12)`, border: `1px solid rgba(${color}, 0.3)` }}
        >
          <Icon size={26} style={{ color: `rgb(${color})` }} />
        </div>
        {!isLast && (
          <div className="flex-1 w-px my-3"
            style={{
              background: `linear-gradient(to bottom, rgba(${color}, 0.4), rgba(${color}, 0.1))`,
              minHeight: '80px'
            }}
          />
        )}
      </div>

      {/* Right: Content */}
      <div className="flex-1 pb-12">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="font-mono text-xs" style={{ color: `rgb(${color})`, opacity: 0.7 }}>STEP {number}</span>
        </div>
        <h3 className="font-display font-bold text-2xl text-text-primary mb-1">{title}</h3>
        <p className="text-sm font-medium mb-5" style={{ color: `rgb(${color})` }}>{subtitle}</p>
        
        <div className="space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: delay + i * 0.08 }}
              className="flex items-start gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: `rgb(${color})`, opacity: 0.7 }} />
              <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Code mock */}
        {number === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.5 }}
            className="mt-6 p-4 rounded-xl code-block"
          >
            <p className="text-text-muted text-xs mb-2 font-mono">// ForestFocus: duration proposal</p>
            <p className="text-accent text-xs">goal</p>
            <p className="text-text-secondary text-xs pl-4">支持 1-180 分钟自定义时长</p>
            <p className="text-accent text-xs mt-2">ui</p>
            <p className="text-text-secondary text-xs pl-4">快捷按钮: 15/25/45/60/90</p>
            <p className="text-text-secondary text-xs pl-4">TimerView badge 可点击弹出选择器</p>
            <p className="text-accent text-xs mt-2">compat</p>
            <p className="text-text-secondary text-xs pl-4">旧数据默认 25min，向后兼容</p>
          </motion.div>
        )}

        {number === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.5 }}
            className="mt-6 p-4 rounded-xl"
            style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <FiCheckCircle className="text-green-400" size={14} />
              <span className="text-green-400 text-xs font-semibold">Review 通过 ✓</span>
            </div>
            <p className="text-text-secondary text-xs leading-relaxed">
              人和 AI 对齐：时长 badge 始终可见 + 可点击，修复了"1分钟用户找不到修改入口"的 UX 问题。
            </p>
          </motion.div>
        )}

        {number === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.5 }}
            className="mt-6 grid grid-cols-3 gap-2"
          >
            {['DurationSelector', 'TimerBadge', 'PhaseEngine'].map((name, i) => (
              <div key={name} className="p-3 rounded-lg glass text-center" style={{ border: '1px solid rgba(0,212,255,0.1)' }}>
                <p className="text-accent font-mono text-xs">{name}</p>
                <p className="text-text-muted text-xs mt-1">implement</p>
              </div>
            ))}
          </motion.div>
        )}

        {number === 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.5 }}
            className="mt-6 space-y-2"
          >
            {['ForestFocus-spec.md', 'duration-change-log.md', 'phase-reference.md'].map((f, i) => (
              <div key={f} className="flex items-center gap-2 p-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <FiBook size={12} className="text-violet-light opacity-60" />
                <span className="text-text-secondary text-xs font-mono">{f}</span>
                <span className="ml-auto text-xs text-green-400 font-mono">archived</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

const WorkflowSection = () => {
  const steps = [
    {
      number: '01',
      icon: FiHelpCircle,
      title: 'Proposal',
      subtitle: 'AI 先不写代码，先问关键问题',
      color: '0, 212, 255',
      items: [
        '明确功能边界、兼容性要求、数据影响',
        '讨论 UI 方案、状态处理、异常情况',
        '把模糊需求变成结构化提案文档',
        '不急于实现，先对齐理解',
      ],
    },
    {
      number: '02',
      icon: FiEdit,
      title: 'Review',
      subtitle: '人和 AI 对齐需求，达成共识',
      color: '124, 58, 237',
      items: [
        '逐条审查 Proposal 内容',
        '补充边界情况、设计细节',
        '调整不合理的假设',
        '这是最便宜的修改阶段 — 发现问题代价最小',
      ],
    },
    {
      number: '03',
      icon: FiSliders,
      title: 'Apply',
      subtitle: 'AI 按规范实现，按任务清单推进',
      color: '245, 158, 11',
      items: [
        '严格按规范执行，不自由发挥',
        '按任务清单逐步交付，保持一致性',
        '遇到规范未覆盖的情况，立即暂停提 Review',
        '保持修改范围可控，不扩散到无关模块',
      ],
    },
    {
      number: '04',
      icon: FiArchive,
      title: 'Archive',
      subtitle: '归档变更，沉淀演进历史',
      color: '16, 185, 129',
      items: [
        '归档 Proposal + 变更内容到规范库',
        '合并增量到主规范文件',
        '沉淀技术决策和设计理由',
        '项目形成清晰演进历史，新成员可追溯',
      ],
    },
  ]

  return (
    <section id="workflow" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)' }} />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">Four-Step Workflow</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            OpenSpec <span className="gradient-text">四步工作流</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            每一步都有明确目的，每一步都在降低风险。不是流程负担，而是工程保障。
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <StepCard key={i} {...step} isLast={i === steps.length - 1} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkflowSection

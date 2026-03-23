import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiStar, FiAlertTriangle, FiUsers, FiTarget, FiSliders, FiCheckCircle, FiLayers } from 'react-icons/fi'

const LevelCard = ({ level, icon: Icon, title, desc, items, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -4, transition: { duration: 0.3 } }}
    className="rounded-2xl p-6 flex-1"
    style={{
      background: 'rgba(255,255,255,0.02)',
      border: `1px solid ${color}20`,
    }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg" style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
        <Icon size={18} style={{ color }} />
      </div>
      <div>
        <span className="text-xs font-mono" style={{ color }}>{level}</span>
        <h4 className="font-semibold text-text-primary text-base">{title}</h4>
      </div>
    </div>
    <p className="text-text-secondary text-sm mb-4">{desc}</p>
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2">
          <FiCheckCircle size={12} style={{ color }} className="flex-shrink-0 mt-0.5" />
          <p className="text-text-muted text-xs">{item}</p>
        </div>
      ))}
    </div>
  </motion.div>
)

const RoleCard = ({ role, icon: Icon, tasks, color }) => (
  <div className="p-5 rounded-xl glass" style={{ border: `1px solid ${color}15` }}>
    <div className="flex items-center gap-2 mb-3">
      <Icon size={16} style={{ color }} />
      <h5 className="font-semibold text-text-primary text-sm">{role}</h5>
    </div>
    <div className="space-y-1.5">
      {tasks.map((task, i) => (
        <p key={i} className="text-text-muted text-xs flex items-start gap-2">
          <span style={{ color }}>→</span>
          <span>{task}</span>
        </p>
      ))}
    </div>
  </div>
)

const RuleCard = ({ rule, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -15 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="flex items-start gap-3 py-3"
    style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
  >
    <FiCheckCircle size={14} className="text-accent flex-shrink-0 mt-0.5" />
    <p className="text-text-secondary text-sm">{rule}</p>
  </motion.div>
)

const RolloutSection = () => {
  const levels = [
    {
      level: 'Level 1',
      icon: FiCode,
      title: '小工具 / 一次性脚本',
      desc: '简单脚本、数据处理、一次性任务，无需复杂规范。',
      color: '#10b981',
      items: ['可直接 AI 辅助', '简单注释即可', '无需完整流程', '用完即扔型'],
    },
    {
      level: 'Level 2',
      icon: FiStar,
      title: '功能增强 / 独立模块',
      desc: '新功能开发、对现有模块的增强，需要基本的边界控制。',
      color: '#f59e0b',
      items: ['建议 Proposal + Review', '明确修改范围', 'Review 后 Apply', '建议归档'],
    },
    {
      level: 'Level 3',
      icon: FiAlertTriangle,
      title: '核心逻辑 / 多模块联动',
      desc: '涉及核心数据模型、支付、权限、跨模块逻辑重构，必须 OpenSpec。',
      color: '#ef4444',
      items: ['必须先 Proposal', '必须 Review 通过', '禁止直接 Apply', '规范归档必做'],
    },
  ]

  const roles = [
    {
      role: '工程师',
      icon: FiCode,
      color: '#00d4ff',
      tasks: [
        '撰写 Proposal，执行 Apply',
        '主动识别规范未覆盖的情况',
        '参与 Review，提出修改意见',
        '负责规范归档完整性',
      ],
    },
    {
      role: 'Tech Lead',
      icon: FiSliders,
      color: '#7c3aed',
      tasks: [
        '把关核心功能的 Proposal',
        '审查边界情况和风险点',
        '确保规范质量和技术合理性',
        '参与复杂 Review',
      ],
    },
    {
      role: '产品 / 业务负责人',
      icon: FiTarget,
      color: '#f59e0b',
      tasks: [
        '确认功能目标和价值',
        '参与 Review 确认需求理解',
        '验收功能是否符合原始目标',
        '参与重要方向性决策',
      ],
    },
    {
      role: 'CEO / 管理层',
      icon: FiUsers,
      color: '#10b981',
      tasks: [
        '审查重大方向性功能方案',
        '关注团队工程能力成长',
        '评估 AI 工程体系ROI',
        '参与季度研发方法复盘',
      ],
    },
  ]

  const rules = [
    '所有 Level 2+ 功能必须先有 Proposal，禁止无规范直接 Apply',
    '核心逻辑修改（Level 3）必须 Review 通过后才可 Apply',
    'AI 遇到规范未覆盖情况，必须暂停提 Review，不可擅自决策',
    '测试全部通过后再归档，禁止跳过测试环节',
    '规范文档是系统资产，归档后不得删除，持续积累团队知识库',
    'Review 是最便宜的试错阶段，鼓励在 Review 里充分讨论',
    'OpenSpec 不是束缚流程的工具，是为团队服务的保障体系',
  ]

  return (
    <section id="rollout" className="py-32 relative">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.02) 50%, transparent)'
      }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">Enterprise Rollout</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            如何在团队 <span className="gradient-text">真正落地</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            不是发个文档就完事了。需要分场景、分角色、分步骤推进。
          </p>
        </div>

        {/* Usage Levels */}
        <div className="mb-20">
          <h3 className="font-semibold text-text-primary text-xl mb-2 flex items-center gap-2">
            <FiLayers size={18} className="text-accent" />
            使用分级建议
          </h3>
          <p className="text-text-muted text-sm mb-8">不是所有需求都同等重要。根据影响范围和风险程度，选择合适的流程强度。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {levels.map((l, i) => <LevelCard key={i} {...l} delay={i * 0.1} />)}
          </div>
        </div>

        {/* Role Mapping */}
        <div className="mb-20">
          <h3 className="font-semibold text-text-primary text-xl mb-2 flex items-center gap-2">
            <FiUsers size={18} className="text-accent" />
            团队角色分工
          </h3>
          <p className="text-text-muted text-sm mb-8">每个角色在 OpenSpec 流程中都有明确的价值贡献点。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((r, i) => <RoleCard key={i} {...r} />)}
          </div>
        </div>

        {/* Principles */}
        <div>
          <h3 className="font-semibold text-text-primary text-xl mb-2 flex items-center gap-2">
            <FiCheckCircle size={18} className="text-accent" />
            推行原则
          </h3>
          <p className="text-text-muted text-sm mb-6">这些原则是底线，不可绕过。随着团队成熟度提升，可以适当调整。</p>
          <div className="max-w-3xl rounded-2xl p-6 glass" style={{ border: '1px solid rgba(0,212,255,0.1)' }}>
            {rules.map((rule, i) => <RuleCard key={i} rule={rule} delay={i * 0.06} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RolloutSection

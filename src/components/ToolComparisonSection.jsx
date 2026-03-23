import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiFileText, FiSliders, FiCheckCircle, FiMinus, FiX } from 'react-icons/fi'

const ToolRow = ({ approach, desc, suitable, color, isOpenSpec = false }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`p-6 rounded-2xl ${isOpenSpec ? 'rounded-2xl' : ''}`}
    style={{
      background: isOpenSpec ? 'rgba(0,212,255,0.05)' : 'rgba(255,255,255,0.02)',
      border: isOpenSpec ? '1px solid rgba(0,212,255,0.2)' : '1px solid rgba(255,255,255,0.05)',
    }}
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          {isOpenSpec && <FiCheckCircle size={14} className="text-accent" />}
          <h4 className={`font-semibold ${isOpenSpec ? 'text-accent' : 'text-text-primary'}`}>
            {approach}
          </h4>
          {isOpenSpec && (
            <span className="badge bg-accent/10 text-accent text-xs" style={{ border: '1px solid rgba(0,212,255,0.2)' }}>
              推荐
            </span>
          )}
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
        <div className="mt-3">
          <span className="text-xs text-text-muted">适合：</span>
          <span className="text-xs text-text-secondary ml-1">{suitable}</span>
        </div>
      </div>
    </div>
  </motion.div>
)

const DimensionTable = () => {
  const tools = [
    { name: '直接让 AI 写代码', accent: false },
    { name: '传统需求文档', accent: false },
    { name: 'spec-kit', accent: false },
    { name: 'Kiro', accent: false },
    { name: 'OpenSpec', accent: true },
  ]
  const dims = [
    { label: '需求表达', spec: '结构化文档', others: ['模糊文字', '格式固定', '偏 0→1', '更新分散', '规范即代码'] },
    { label: 'AI 友好度', spec: '原生适配', others: ['差', '好', '好', '中', 'AI 优先设计'] },
    { label: '代码绑定', spec: '实时同步', others: ['无', '分离', '弱', '弱', '与实现共存'] },
    { label: '团队协作', spec: '标准化', others: ['差', '好', '中', '中', '跨角色支持'] },
    { label: '长期迭代', spec: '优秀', others: ['差', '好', '中', '弱', '复杂系统首选'] },
    { label: '管理层参与', spec: '可行', others: ['不可', '可行', '不可', '不可', 'Review 可介入'] },
  ]

  return (
    <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
      <table className="w-full">
        <thead>
          <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
            <th className="px-6 py-4 text-left text-xs font-mono text-text-muted uppercase tracking-wider w-32">维度</th>
            {tools.map(t => (
              <th key={t.name} className="px-4 py-4 text-center">
                <span className={`text-xs font-semibold ${t.accent ? 'text-accent' : 'text-text-secondary'}`}>
                  {t.name}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dims.map((dim, i) => (
            <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <td className="px-6 py-4 text-sm text-text-secondary font-medium">{dim.label}</td>
              {dim.others.map((val, j) => (
                <td key={j} className="px-4 py-4 text-center">
                  {j === dim.others.length - 1 ? (
                    <span className="text-xs text-accent font-medium">{val}</span>
                  ) : (
                    <span className="text-xs text-text-muted">{val}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const ToolComparisonSection = () => {
  return (
    <section id="compare" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }} />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="section-label mb-4">Competitive Analysis</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            OpenSpec <span className="gradient-text">横向对比</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            理性、专业、偏架构选型视角。不是攻击对手，而是说明适用场景。
          </p>
        </div>

        {/* Approaches */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <ToolRow
            approach="直接让 AI 写代码"
            desc="快，但不可控。AI 自由发挥，边界不清晰。适合一次性脚本、小工具、概念验证。"
            suitable="一次性脚本 / 临时工具 / POC"
          />
          <ToolRow
            approach="传统需求文档（PRD/FRD）"
            desc="文档与代码分离，维护成本高，且 AI 无法有效利用传统文档。文档更新 ≠ 代码更新，两套真相。"
            suitable="大型瀑布项目 / 合规要求场景"
          />
          <ToolRow
            approach="spec-kit"
            desc="更偏 0→1 新项目设计阶段，spec 生成与代码分离感更强。对于已有项目持续迭代（1→N）场景支撑较弱。"
            suitable="新项目 0→1 阶段"
          />
          <ToolRow
            approach="Kiro"
            desc="更新分散在多个对话中，缺乏统一的归档结构。Spec 历史和演进脉络不如 OpenSpec 清晰。"
            suitable="快速探索阶段"
          />
          <ToolRow
            approach="OpenSpec"
            desc="与代码同目录、与实现共存、与 AI 原生协作。四步流程覆盖完整生命周期，最适合已有项目持续迭代（1→N）。"
            suitable="核心系统 / 长期迭代 / 团队协作"
            isOpenSpec
          />
        </div>

        {/* Dimension Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-semibold text-text-primary text-xl mb-6 text-center">多维度横向对比</h3>
          <DimensionTable />
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass"
            style={{ border: '1px solid rgba(0,212,255,0.15)' }}>
            <FiCheckCircle className="text-accent" size={18} />
            <p className="text-text-secondary text-sm">
              OpenSpec 解决的核心问题：<span className="text-text-primary font-medium">在 1→N 阶段，如何让 AI 编程保持可控、可追溯、可协作。</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ToolComparisonSection

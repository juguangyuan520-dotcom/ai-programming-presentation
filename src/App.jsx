import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { FiZap, FiShield, FiCheckCircle, FiAlertTriangle, FiArrowRight, FiLayers, FiGitBranch, FiClock, FiUsers, FiTarget, FiActivity, FiFileText, FiCode, FiStar, FiEdit, FiSliders, FiArchive, FiTrendingUp } from 'react-icons/fi'

// ─────────────────────────────────────────────
// SHARED UTILITIES
// ─────────────────────────────────────────────
const Section = ({ children, className = '', id = '' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  )
}

// ─────────────────────────────────────────────
// 1. HERO SECTION
// ─────────────────────────────────────────────
const HeroSection = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: '#030307' }} />
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.1) 0%, rgba(124,58,237,0.07) 40%, transparent 70%)' }} />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity }} />
      {[20, 50, 75].map((left, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{
            width: 3, height: 3, left: `${left}%`, top: `${15 + i * 20}%`,
            background: 'rgba(0,212,255,0.7)',
            boxShadow: '0 0 8px 3px rgba(0,212,255,0.3)'
          }}
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.7 }} />
      ))}

      <motion.div style={{ y: y1, opacity }} className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium"
            style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)', color: '#00d4ff' }}>
            <FiZap size={13} />Claude Code + OpenSpec 方法论
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          <span className="text-gray-100">让 AI 编程</span>
          <br />
          <span style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            100% 可控
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-4 leading-relaxed">
          从聊天式写代码，升级到规范驱动的软件工程系统
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="text-sm text-gray-600 max-w-2xl mx-auto mb-12">
          Claude Code 很强，但真正决定质量的，不是模型能力，而是你是否建立了可控的工程流程。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a href="#comparison"
            whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-xl font-semibold text-base relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)', boxShadow: '0 0 40px rgba(0,212,255,0.2), 0 4px 20px rgba(0,0,0,0.4)' }}>
            <span className="relative z-10 flex items-center gap-2.5 text-white">
              查看核心差异<FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
          <motion.a href="#workflow"
            whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl font-semibold text-base glass relative overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            <span className="relative z-10 flex items-center gap-2.5 text-gray-200">
              <FiLayers size={16} />OpenSpec 工作流
            </span>
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="mt-20 flex flex-col items-center gap-2">
          <span className="text-gray-600 text-xs tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono' }}>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(0,212,255,0.5), transparent)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─────────────────────────────────────────────
// 2. PAIN POINTS
// ─────────────────────────────────────────────
const PainPointCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    className="group relative p-6 rounded-2xl cursor-default"
    style={{ background: 'rgba(18,18,28,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(239,68,68,0.15)' }}>
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: 'radial-gradient(ellipse at top, rgba(239,68,68,0.05) 0%, transparent 70%)' }} />
    <div className="relative z-10">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2.5 rounded-xl flex-shrink-0" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
          <Icon size={20} className="text-red-400" />
        </div>
        <h3 className="font-semibold text-gray-100 text-base leading-snug pt-1">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed pl-14">{description}</p>
    </div>
  </motion.div>
)

const PainPointsSection = () => {
  const painPoints = [
    { icon: FiAlertTriangle, title: 'AI 会误解需求，反复返工', description: '对话式交流中，AI 容易忽略边界条件、用户场景假设，导致最终交付与预期不符。' },
    { icon: FiGitBranch, title: '修改超出预期范围', description: 'AI 在解决一个问题时，可能顺手修改多个不相关的文件，引入难以察觉的副作用。' },
    { icon: FiActivity, title: '多轮对话后严重偏离目标', description: '随着对话深入，AI 的上下文漂移越来越严重，最终交付与最初目标相去甚远。' },
    { icon: FiFileText, title: '需求只存在于聊天记录中', description: '对话结束后，需求、决策、边界条件全部散落在对话窗口里，无法追溯、无法复用。' },
    { icon: FiUsers, title: '团队无法统一协作标准', description: '不同工程师的提示词风格各异，AI 输出质量参差不齐，缺乏一致性的工程保障。' },
    { icon: FiShield, title: '核心逻辑缺乏可控性', description: '涉及支付、数据模型、权限等核心逻辑时，AI 的自由发挥带来不可接受的风险。' },
    { icon: FiCode, title: '代码与文档分离，两套真相', description: '传统文档与实际代码脱节，维护成本极高，且无法被 AI 有效利用。' },
  ]
  return (
    <Section id="pain-points" className="py-32">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.3), transparent)' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="mb-4" style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(239,68,68,0.8)' }}>Problem Definition</p>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-100 mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            为什么只用 Claude Code <span style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>不够</span>？
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            问题不在 AI 不够强，而在需求只存在对话中，而不是存在规范中。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((p, i) => <PainPointCard key={i} {...p} delay={i * 0.08} />)}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl"
            style={{ background: 'rgba(18,18,28,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(239,68,68,0.2)' }}>
            <FiAlertTriangle className="text-red-400 flex-shrink-0" size={18} />
            <p className="text-gray-400 text-sm">
              <span className="text-red-400 font-semibold">核心矛盾：</span>
              AI 的能力上限在增长，但工程可控性取决于团队是否建立了规范流程。
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

// ─────────────────────────────────────────────
// 3. COMPARISON SECTION
// ─────────────────────────────────────────────
const ComparisonRow = ({ label, left, right }) => (
  <div className="grid grid-cols-2 gap-4 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
    <div className="flex items-center"><span className="text-gray-400 text-sm">{label}</span></div>
    <div className="grid grid-cols-2 gap-4">
      <span className={`text-sm ${left.highlight ? 'text-red-400' : 'text-gray-500'}`}>{left.text}</span>
      <span className={`text-sm ${right.highlight ? 'text-cyan-400' : 'text-gray-500'}`}>{right.text}</span>
    </div>
  </div>
)

const ComparisonSection = () => {
  const comparisons = [
    { label: '需求表达方式', left: { text: '"帮我加个功能"', highlight: true }, right: { text: '结构化 Proposal 文档', highlight: true } },
    { label: 'AI 行为可预测性', left: { text: '不可预测', highlight: true }, right: { text: '按规范执行', highlight: true } },
    { label: '修改范围可控性', left: { text: '易扩散', highlight: true }, right: { text: '边界清晰', highlight: true } },
    { label: '多轮对话稳定性', left: { text: '逐渐偏离', highlight: true }, right: { text: '始终对齐目标', highlight: true } },
    { label: '文档沉淀', left: { text: '散落在聊天中', highlight: true }, right: { text: '规范即文档', highlight: true } },
    { label: '可追溯性', left: { text: '几乎无追溯', highlight: true }, right: { text: '完整变更历史', highlight: true } },
    { label: '团队协作能力', left: { text: '个人化', highlight: true }, right: { text: '标准化流程', highlight: true } },
    { label: '适合场景', left: { text: '小脚本/临时任务', highlight: true }, right: { text: '核心系统/长期迭代', highlight: true } },
    { label: '长期迭代', left: { text: '技术债堆积', highlight: true }, right: { text: '演进史清晰', highlight: true } },
    { label: '管理层审查', left: { text: '无法介入', highlight: true }, right: { text: '可参与 Review', highlight: true } },
  ]
  return (
    <Section id="comparison" className="py-32">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.03) 0%, transparent 50%, rgba(0,212,255,0.03) 100%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(124,58,237,0.4), transparent)' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="mb-4" style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,212,255,0.7)' }}>Core Comparison</p>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-100 mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            两个世界的差距，<span style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>一目了然</span>
          </h2>
          <p className="text-gray-400 text-lg">OpenSpec 不是一个附加工具，而是一种开发范式升级。</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }} className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(239,68,68,0.2)' }}>
            <div className="px-8 py-6" style={{ background: 'rgba(239,68,68,0.08)' }}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ background: 'rgba(239,68,68,0.15)' }}><FiAlertTriangle size={18} className="text-red-400" /></div>
                <div><p className="font-semibold text-gray-100">Claude Code Only</p><p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: 'JetBrains Mono' }}>Direct Prompting / Chat-based</p></div>
              </div>
            </div>
            <div className="p-8">{comparisons.map((c, i) => <ComparisonRow key={i} {...c} />)}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(0,212,255,0.3)', boxShadow: '0 0 40px rgba(0,212,255,0.08)' }}>
            <div className="px-8 py-6" style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(124,58,237,0.1))' }}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ background: 'rgba(0,212,255,0.2)', border: '1px solid rgba(0,212,255,0.3)' }}><FiShield size={18} className="text-cyan-400" /></div>
                <div><p className="font-semibold text-gray-100">Claude Code + OpenSpec</p><p className="text-xs text-cyan-400/70 mt-0.5" style={{ fontFamily: 'JetBrains Mono' }}>Spec-driven Engineering</p></div>
              </div>
            </div>
            <div className="p-8">{comparisons.map((c, i) => <ComparisonRow key={i} label={c.label} left={{ text: '—' }} right={c.right} />)}</div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl" style={{ background: 'rgba(18,18,28,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,212,255,0.2)' }}>
            <FiCheckCircle className="text-cyan-400 flex-shrink-0" size={20} />
            <p className="text-gray-100 font-medium text-base">
              从"让 AI 猜需求" → <span style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 'bold' }}>"让 AI 执行规范"</span>
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

// ─────────────────────────────────────────────
// 4. PHILOSOPHY SECTION
// ─────────────────────────────────────────────
const PhilosophySection = () => (
  <Section id="philosophy" className="py-32">
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)' }} />
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div className="space-y-8">
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,212,255,0.7)' }}>Core Philosophy</p>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-100 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            从 <span className="text-red-400">猜</span> 到 <span className="text-cyan-400">执行</span>，<br />一次认知升级
          </h2>

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-red-400 font-semibold text-sm">Before</span>
            </div>
            <p className="text-gray-100 font-medium text-lg leading-relaxed mb-3">"AI 猜你的需求，然后写代码"</p>
            <p className="text-gray-500 text-sm">模糊指令 → 自由发挥 → 不确定结果 → 反复返工</p>
            <div className="mt-5 flex items-center gap-2 flex-wrap">
              {['不可控', '不稳定', '难追溯'].map(tag => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs" style={{ background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}>{tag}</span>
              ))}
            </div>
          </motion.div>

          <div className="flex justify-center">
            <div className="flex items-center gap-3 text-cyan-400">
              <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5))' }} />
              <FiArrowRight size={20} />
              <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, rgba(0,212,255,0.5), transparent)' }} />
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 rounded-2xl" style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.2)', boxShadow: '0 0 30px rgba(0,212,255,0.05)' }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 8px rgba(0,212,255,0.5)' }} />
              <span className="text-cyan-400 font-semibold text-sm">After</span>
            </div>
            <p className="text-gray-100 font-medium text-lg leading-relaxed mb-3">"人和 AI 先对齐需求，形成规范，AI 再按规范执行"</p>
            <p className="text-gray-500 text-sm">结构化提案 → 规范审查 → 按规执行 → 归档沉淀</p>
            <div className="mt-5 flex items-center gap-2 flex-wrap">
              {['可控', '稳定', '可追溯'].map(tag => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs" style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)' }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative flex flex-col gap-5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)' }} />
          </div>
          {[
            { icon: FiTarget, label: '需求 / Intention', sub: '模糊的想法、业务目标', color: '#00d4ff', delay: 0.2 },
            { icon: FiFileText, label: '规范 / Spec', sub: '结构化、可执行、有边界', color: '#7c3aed', delay: 0.35 },
            { icon: FiCode, label: '执行 / Apply', sub: '按规范实现、任务清单推进', color: '#f59e0b', delay: 0.5 },
            { icon: FiArchive, label: '归档 / Archive', sub: '沉淀文档、形成演进历史', color: '#10b981', delay: 0.65 },
          ].map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: step.delay }} className="relative flex items-center gap-5 p-5 rounded-2xl glass"
              style={{ border: `1px solid ${step.color}20`, background: `${step.color}06` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}>
                <step.icon size={22} style={{ color: step.color }} />
              </div>
              <div>
                <p className="text-gray-100 font-medium text-sm">{step.label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{step.sub}</p>
              </div>
            </motion.div>
          ))}

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
            className="mt-6 p-5 rounded-xl text-center" style={{ background: 'rgba(18,18,28,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="text-gray-300 font-semibold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
              "不要让 AI 猜需求，要让 AI 执行规范。"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </Section>
)

// ─────────────────────────────────────────────
// IMPORT OTHER SECTIONS
// ─────────────────────────────────────────────
import WorkflowSection from './components/WorkflowSection'
import DemoCaseSection from './components/DemoCaseSection'
import ExecutiveValueSection from './components/ExecutiveValueSection'
import ToolComparisonSection from './components/ToolComparisonSection'
import RolloutSection from './components/RolloutSection'
import FinalCTASection from './components/FinalCTASection'

// ─────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────
export default function App() {
  return (
    <div className="noise-overlay" style={{ background: '#030307', minHeight: '100vh' }}>
      <HeroSection />
      <PainPointsSection />
      <ComparisonSection />
      <PhilosophySection />
      <WorkflowSection />
      <DemoCaseSection />
      <ExecutiveValueSection />
      <ToolComparisonSection />
      <RolloutSection />
      <FinalCTASection />

      {/* Footer */}
      <footer className="py-8 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-gray-600 text-xs" style={{ fontFamily: 'JetBrains Mono' }}>
          Claude Code + OpenSpec · Spec-driven Engineering · 企业级 AI 编程方案
        </p>
      </footer>
    </div>
  )
}

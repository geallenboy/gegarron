import {
  name,
  identityLabels,
  profileManifesto,
  journeyTimeline,
  workingPrinciples,
  collaborationModes,
} from '@/config/infoConfig'

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-[768px] px-4 py-12 sm:px-6 lg:py-16">
      {/* ── Personal intro ── */}
      <section>
        <h1 className="text-2xl font-bold text-(--ink)">
          我是{name}，一个把 AI 当作长期能力建设工具的人。
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {identityLabels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-(--line) px-3 py-1 text-xs text-(--muted)"
            >
              {label}
            </span>
          ))}
        </div>

        <p className="mt-6 text-lg italic text-(--accent)">
          {profileManifesto}
        </p>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-(--muted)">
          <p>
            我不是把 AI
            当作一阵风口，也不想把自己包装成"成功样本"。我更感兴趣的是，如何在不确定性持续增加的时代，用
            AI 帮自己建立更强的判断力、执行力和复利系统。
          </p>
          <p>
            这个网站对我来说不是传统意义上的作品集，而是一张公开的工作台。我会在这里记录思考、发布文章、复盘产品，也分享我如何帮助个人和企业把
            AI 接进真实工作流。
          </p>
          <p>
            我对"超级个体"的理解不是万能，而是持续思考、公开记录、快速行动、长期积累。如果内容、产品和服务能互相放大，一个人也可以形成自己的系统能力。
          </p>
        </div>
      </section>

      {/* ── Growth timeline ── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-(--ink)">成长路径</h2>

        <div className="mt-6 space-y-6">
          {journeyTimeline.map((item) => (
            <div key={item.title} className="border-l-2 border-(--line) pl-5">
              <p className="text-xs font-medium uppercase tracking-widest text-(--accent)">
                {item.period}
              </p>
              <h3 className="mt-1 text-base font-semibold text-(--ink)">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-(--muted)">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Working principles ── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-(--ink)">工作原则</h2>

        <ol className="mt-6 space-y-4">
          {workingPrinciples.map((item, index) => (
            <li key={item} className="flex gap-4">
              <span className="shrink-0 text-sm font-semibold text-(--accent)">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-base text-(--muted)">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Collaboration modes ── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-(--ink)">合作方式</h2>

        <div className="mt-6 space-y-5">
          {collaborationModes.map((item) => (
            <div
              key={item.title}
              className="border-b border-(--line) pb-5 last:border-b-0 last:pb-0"
            >
              <h3 className="text-base font-semibold text-(--ink)">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-(--muted)">
                {item.description}
              </p>
              <span className="mt-2 inline-block rounded-full border border-(--line) px-3 py-0.5 text-xs text-(--muted)">
                {item.fit}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

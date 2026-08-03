const levels = [
  { level: "LV1", name: "普通", alias: "初来岛上", color: "#7C8798", note: "开始参与", rule: "完成首次有效行为" },
  { level: "LV2", name: "活跃", alias: "常驻岛民", color: "#4B8FF7", note: "持续活跃", rule: "形成稳定的真实互动" },
  { level: "LV3", name: "贡献", alias: "共建达人", color: "#22A06B", note: "有效共建", rule: "产生可验证的内容或资料贡献" },
  { level: "LV4", name: "专业", alias: "岛内专家", color: "#9B6BD3", note: "专业认证", rule: "达到门槛并完成能力认证", verified: true },
  { level: "LV5", name: "名人", alias: "岛屿名人", color: "#D9782D", note: "代表影响", rule: "达到门槛并经人工确认", verified: true },
];

function LevelTag({ item, compact = false }: { item: (typeof levels)[number]; compact?: boolean }) {
  return (
    <span className={`level-tag${compact ? " is-compact" : ""}`} style={{ "--level": item.color } as React.CSSProperties}>
      <b>{item.level}</b><i aria-hidden="true" /><span>{item.name}</span>{item.verified && <em>认证</em>}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar"><div className="brand"><span className="brand-mark">千</span><span>岛内成长 · V1</span></div><span className="version">身份等级标签规范 01</span></header>

      <section className="hero">
        <div className="eyebrow">GENERAL IDENTITY LEVEL</div>
        <h1>一眼看懂，<br />你在岛内的成长身份</h1>
        <p>等级记录用户在单个岛内的长期有效贡献。统一的 LV 与通用身份负责识别，岛内称号负责表达圈层文化。</p>
        <div className="principles"><span>个人 × 单岛</span><span>只升不降</span><span>非管理权限</span><span>非成就徽章</span></div>
      </section>

      <section className="panel anatomy">
        <div className="section-heading"><div><small>01 / CORE COMPONENT</small><h2>标签本体</h2></div><p>始终保留“LV + 通用身份”两个识别锚点；LV4、LV5 增加认证标记，避免用户误以为仅靠积分自动升级。</p></div>
        <div className="tag-stage">
          <div className="tag-large"><LevelTag item={levels[2]} /><span className="alias">岛内称号 · 共建达人</span></div>
          <div className="callout c1"><b>01</b><span>统一等级<br />全站不可替换</span></div>
          <div className="callout c2"><b>02</b><span>等级色标<br />辅助快速识别</span></div>
          <div className="callout c3"><b>03</b><span>通用身份<br />跨岛统一语义</span></div>
          <div className="callout c4"><b>04</b><span>岛内称号<br />仅作文化化表达</span></div>
        </div>
      </section>

      <section className="panel ladder">
        <div className="section-heading"><div><small>02 / LEVEL LADDER</small><h2>五级身份</h2></div><p>颜色用于区分阶段，不表达稀有度。名称固定，门槛由影子计分验证后再确定。</p></div>
        <div className="level-grid">
          {levels.map((item) => <article key={item.level} style={{ "--level": item.color } as React.CSSProperties}>
            <div className="level-top"><LevelTag item={item} /><span className="level-no">{item.level.slice(2).padStart(2, "0")}</span></div>
            <h3>{item.alias}</h3><p>{item.note}</p><div className="rule"><span>建议判定</span>{item.rule}</div>
          </article>)}
        </div>
      </section>

      <section className="panel examples">
        <div className="section-heading"><div><small>03 / IN CONTEXT</small><h2>场景露出</h2></div><p>身份等级不占用徽章佩戴位。空间不足时优先保留 LV 和通用身份，岛内称号可隐藏。</p></div>
        <div className="example-grid">
          <div className="profile-card"><div className="cover" /><div className="profile-main"><div className="avatar">禾</div><div><h3>小禾同学</h3><div className="identity-line"><LevelTag item={levels[2]} /><span>LABUBU 岛 · 共建达人</span></div></div></div><div className="stats"><span><b>386</b>岛内贡献值</span><span><b>18</b>有效贡献</span><span><b>4</b>成就徽章</span></div></div>
          <div className="feed-card"><small>帖子 / 评论区</small><div className="comment"><div className="avatar small">禾</div><div><div className="author">小禾同学 <LevelTag item={levels[2]} compact /></div><p>刚补完这一系列的隐藏款资料，欢迎大家一起校对。</p><span className="meta">12 分钟前 · LABUBU 岛</span></div></div><div className="comment"><div className="avatar small purple">屿</div><div><div className="author">岛屿观察员 <LevelTag item={levels[3]} compact /></div><p>资料已核验，通过后会计入本周贡献记录。</p><span className="meta">8 分钟前 · LABUBU 岛</span></div></div></div>
        </div>
      </section>

      <section className="rules-bar"><div><b>展示优先级</b><span>LV → 通用身份 → 认证状态 → 岛内称号</span></div><div><b>明确边界</b><span>等级 ≠ 徽章　等级 ≠ 管理员　等级 ≠ 平台身份</span></div></section>
      <footer>QIANDAO · GROWTH SYSTEM V1 <span>GENERAL IDENTITY LABEL</span></footer>
    </main>
  );
}

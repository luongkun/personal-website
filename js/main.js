const skills = [
  { name: "HTML & CSS", desc: "Xây dựng giao diện responsive" },
  { name: "JavaScript", desc: "Tương tác và logic phía client" },
  { name: "Git & GitHub", desc: "Quản lý mã nguồn và làm việc nhóm" },
];

const projects = [
  { name: "Dự án 1", desc: "Mô tả ngắn về dự án đầu tiên của bạn.", link: "#" },
  { name: "Dự án 2", desc: "Mô tả ngắn về dự án thứ hai của bạn.", link: "#" },
  { name: "Dự án 3", desc: "Mô tả ngắn về dự án thứ ba của bạn.", link: "#" },
];

function renderCards(items, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        ${item.link ? `<p><a href="${item.link}" target="_blank" rel="noopener">Xem thêm →</a></p>` : ""}
      </article>`
    )
    .join("");
}

renderCards(skills, "skills-grid");
renderCards(projects, "projects-grid");

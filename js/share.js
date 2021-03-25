{
  const container = document.querySelector('.share');
  const title = document.querySelector('h1').textContent.trim();
  const url = location.href;

  [
    {
      id: "linkedin",
      text: "Share on LinkedIn",
      url: "https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]"
    },
    {
      id: "twitter",
      text: "Share on Twitter",
      url: "https://twitter.com/share?url=[post-url]&text=[post-title]"
    },
    {
      id: "facebook",
      text: "Share on Facebook",
      url: "https://www.facebook.com/sharer.php?u=[post-url]"
    },
    {
      id: "whatsapp",
      text: "Send on WhatsApp",
      url: "https://api.whatsapp.com/send?text=[post-title] [post-url]"
    },
    {
      id: "telegram",
      text: "Send on Telegram",
      url: "https://t.me/share/url?url=[post-url]&text=[post-title]"
    }
  ].forEach(c => {
    const a = document.createElement('a');
    a.classList.add(c.id);
    a.title = c.text;
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
    a.setAttribute("aria-label", c.text);
    a.style.backgroundImage = `url('/images/${c.id}.svg')`;
    a.href = c.url.replace(/\[post-title\]/, title).replace(/\[post-url\]/, url);
    container.appendChild(a);
  });

}
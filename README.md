<div align="center">
  <h1>My Personal Portfolio</h1>
  <p>
    <strong><a href="https://www.victorlwernay.dev" target="_blank">victorlwernay.dev</a></strong>
  </p>
  
  <p>
    The source code for my personal portfolio, developed with a focus on performance, SEO, modern architecture, and the best practices of the Next.js ecosystem.
  </p>

  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 15"/>
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=white" alt="React 19"/>
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5"/>
  <img src="https://img.shields.io/badge/Chakra%20UI-3-teal?style=for-the-badge&logo=chakraui&logoColor=white" alt="Chakra UI 3"/>
  <img src="https://img.shields.io/badge/BiomeJS-Linter%20&%20Formatter-green?style=for-the-badge&logo=biome&logoColor=white" alt="BiomeJS"/>
</div>

<br/>

<div align="center">
  <img alt="Demonstração do Portfólio" src=".github/smartmockups_lzx5ra06.png" />
</div>

## ✨ Features

This project was built with an architecture that prioritizes user and developer experience.

- 🚀 **Performance First:** Statically generated (**SSG**) with Next.js for near-instant loading and excellent Lighthouse scores.
- 🏗️ **Modern Architecture:** Built with **Server Components (RSC)** by default, minimizing JavaScript sent to the client and ensuring optimized rendering.
- 💅 **Automated Code Quality:** Linter and formatter integrated with **BiomeJS** (via Ultracite preset), ensuring consistency and preventing errors before each commit with **Husky**.
- 🎨 **Modern and Responsive UI:** Clean design that adapts to any device, with Light/Dark theme support, built with **Chakra UI**.
- 📧 **Functional Contact Form:** Integration with **EmailJS** to send emails directly from the client.
- 🔎 **SEO Optimized:** Dynamic metadata and Open Graph tags for better indexing and sharing on social networks.

## 🛠️ Technologies Used

- **Framework:** [Next.js 15](https://nextjs.org/) (with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Library:** [Chakra UI](https://chakra-ui.com/)
- **Linting/Formatting:** [BiomeJS](https://biomejs.dev/) (com preset [Ultracite](https://www.ultracite.ai/))
- **Commit Automation:** [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 🚀 Starting

To run this project locally, follow the steps below:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/vWernay/portfoliov2.git
    cd portfoliov2
    ```

2.  **Install the dependencies:**

    ```bash
    pnpm install
    ```

3.  **Setup environment variables:**

    - Create a `.env.local` file in the project root, following the example of `.env.example`:

    ```env
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLICK_KEY
    ```

4.  **Start the development server:**
    ```bash
    pnpm run dev
    ```

The application will be available at <http://localhost:3000>.

## 🗺️ Roadmap

The next steps planned for the project are:

- [ ] Add unit tests with Jest/Vitest.
- [ ] Implement multi-language support (i18n).

## 📄 License

This project is licensed under the MIT License. See the [LICENSE] file for more details.

---

<p align="center">
  Copyright © 2025 Victor Lellis.
</p>

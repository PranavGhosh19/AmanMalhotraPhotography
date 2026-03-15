
# Aman Malhotra Photography - Premium Visual Identity

This is a high-end photography portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## 📸 Using Your Own Photos

To use your own local photos in this project:

1. **Create an images folder:** Create a directory named `public/images/` at the root of your project.
2. **Add your files:** Place your `.jpg` or `.png` files inside that folder.
3. **Update the data:** Open `src/app/lib/placeholder-images.json` and update the `imageUrl` fields to match your filenames (e.g., `"/images/your-photo.jpg"`).
4. **Restart Dev Server:** If the images don't appear immediately, restart your development server.

## 🚀 How to push to GitHub

To push this project to your own GitHub repository, follow these steps in your terminal:

1. **Initialize Git:**
   ```bash
   git init
   ```

2. **Add all files:**
   ```bash
   git add .
   ```

3. **Commit your changes:**
   ```bash
   git commit -m "Initial commit: Professional Photography Portfolio"
   ```

4. **Create a new repository on GitHub.com** (do not initialize it with a README or License).

5. **Link your local repo to GitHub:**
   (Replace `your-username` and `your-repo-name` with your actual details)
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   ```

6. **Push the code:**
   ```bash
   git push -u origin main
   ```

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **AI Integration:** [Genkit](https://firebase.google.com/docs/genkit)

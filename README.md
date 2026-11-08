# Audrey Deng's Website

This repository contains the source code for [audreydeng.ink](https://audreydeng.ink). These instructions are for making small site updates on a Mac with Visual Studio Code, GitHub, and Copilot Chat.

## First-Time Setup

### Install the tools

1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Install Git. The easiest Mac option is to open Terminal (Applications > Utilities > Terminal) and run `xcode-select --install`. Follow the prompts if macOS asks to install the command-line developer tools.
3. Install [Node.js 18 LTS](https://nodejs.org/). This project uses npm, which is included with Node.js.
4. Open VS Code, select the Extensions icon in the left sidebar, and install **GitHub Copilot**. Sign in with the GitHub account that has access to this repository. Copilot Chat availability depends on the account's plan and settings.

### Set up an SSH key for GitHub

An SSH key lets GitHub confirm your computer's identity when you clone or push code. Never share your private key; only upload the `.pub` public key.

1. In Terminal, create a key (replace the email with the one associated with your GitHub account):

	```bash
	ssh-keygen -t ed25519 -C "your-email@example.com"
	```

2. When asked where to save it, press Return to use the default location, then Return again to skip the passphrase.
3. Copy the public key:

	```bash
	pbcopy < ~/.ssh/id_ed25519.pub
	```

4. On GitHub, open your profile menu > **Settings** > **SSH and GPG keys** > **New SSH key**. Give it a name such as “My Mac,” paste the key, and save it.
5. Test the connection in Terminal:

	```bash
	ssh -T git@github.com
	```

	Confirm the prompt to trust GitHub if it appears. GitHub should respond with a message that you authenticated successfully.

### Clone the website repository

In Terminal, go to the folder where you keep projects (for example, `cd ~/Documents`) and run:

```bash
git clone git@github.com:audreydeng/audreydeng.github.io.git
cd audreydeng.github.io
code .
```

If the `code` command is not found, open VS Code, press Command-Shift-P, search for **Shell Command: Install 'code' command in PATH**, and run it. Then try `code .` again.

Set your name and email for commit records once on this Mac:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

## Make Changes With Copilot Chat

The site is built with React. Important files include:

- `src/components/About/About.js` for the About page and contact details
- `src/components/Writing/Writing.js` for writing links and categories
- `src/components/Illustration/Illustration.js` for illustration projects
- `src/components/Navbar.js` for the header navigation
- `src/style.css` for the site's visual styles
- `public/` for files served directly by the site; `src/Assets/` contains imported assets such as the CV

## Update Photos or the Downloadable CV

### Replace the CV

The About page and header both use `src/Assets/Deng_CV.pdf`. To replace it without changing either link:

1. Export the updated CV as a PDF and name it exactly `Deng_CV.pdf`.
2. In Finder, open the repository folder, then open `src` > `Assets`.
3. Drag the new PDF into `Assets` and choose **Replace** when macOS asks. Keep the exact filename and capitalization.
4. In VS Code, check that `src/Assets/Deng_CV.pdf` appears as changed in the Source Control view. Run the local preview and click **Download CV** to confirm it opens the new PDF.

Because the file name and path stay the same, you do not need to edit the code. If you choose a different filename, ask Copilot Chat to update the CV imports in both `src/components/Navbar.js` and `src/components/About/About.js` to match.

### Add or replace a photo

Photo files can be added with Finder, but the site also needs its code updated to display them. The About photo and Illustration page images are currently referenced by URLs in their component files; just copying a photo into the repository will not make it appear on the site.

1. In Finder, open the repository folder, then open `public`. Create an `images` folder if it does not exist.
2. Drag the new photo into `public/images`. Use a simple lowercase filename, such as `about-photo.jpg`, with no spaces. Keep the original file extension (for example `.jpg`, `.png`, or `.webp`).
3. In VS Code, open Copilot Chat and be specific about which image to replace. For example:

	> Replace the About page portrait with `public/images/about-photo.jpg`. Update the image reference in `src/components/About/About.js` to `/images/about-photo.jpg`, keep the existing layout and sizing behavior, and use this alt text: "Audrey Deng".

	For an Illustration page image, say which project or gallery item it belongs to and ask Copilot to use the file at `/images/your-file-name.jpg`. Review the changes in the relevant component and make sure its link and alt text are still correct.
4. Run `npm start` and check the page in the browser. Confirm the new image loads and looks right on both a wide and narrow window before publishing.

### Save asset changes with Git

Use the same update branch and pull-request process described below. Git includes the changed photo or PDF file as well as any code-reference changes.

In VS Code, open **Source Control**, review the changed files, stage the files with the **+** button, enter a descriptive message such as `Replace About portrait`, and select **Commit**. Then select **Sync Changes** or **Push** to send the branch to GitHub. If you prefer Terminal, from the repository folder run:

For a CV-only update, stage and commit the PDF:

```bash
git add src/Assets/Deng_CV.pdf
git commit -m "Update downloadable CV"
git push
```

For a photo update, stage the photo and the component file Copilot changed. For example:

```bash
git add public/images/about-photo.jpg src/components/About/About.js
git commit -m "Replace About portrait"
git push
```

If the changed files differ from these examples, substitute their actual paths. You can see the exact changed-file paths in VS Code's Source Control view.

Before each update, create a separate branch in VS Code's integrated terminal (press Ctrl + ` to open the integrated terminal):

```bash
git switch main
git pull
git switch -c update/short-description
```

Use a short branch name that describes the task, such as `update/writing-links`.

Open Copilot Chat in VS Code and describe the result you want in plain language. For example:

> In the Writing page, add this link under Essays: [paste the title and URL]. Keep the existing layout and do not change other sections.

For a larger task, select **Autopilot** in Copilot Chat if it is available. Autopilot can make a sequence of edits and run checks, so review its proposed changes carefully in VS Code's Source Control view before accepting or pushing them. Check that it changed the right content and did not expose private information. You can ask Copilot to explain a change or undo its own recent edit if the result is wrong.

## Preview While Editing

In VS Code, open **Terminal > New Terminal** and run:

```bash
npm install
npm start
```

`npm install` downloads the project dependencies and is normally needed only the first time, or after dependencies change. `npm start` starts the local preview. Open the URL printed in the terminal, usually [http://localhost:3000](http://localhost:3000).

Keep that terminal running while you work. Save your files and the browser preview will update automatically as you edit; you do not need to stop and restart `npm start` for ordinary text or style changes. To stop the local server when you are done, click the terminal and press Control-C.

Before sharing the update, you can ask Copilot to check the work or run this production-build check in the terminal:

```bash
npm run build
```

## Save and Publish Changes

Git branches keep unfinished work separate from the live site. After reviewing the edits and local preview, you can ask Copilot Chat:

> Push descriptive commits to the current branch.

Review the files and commit message in VS Code's Source Control view. Copilot may ask you to confirm actions; check the proposed changes before approving. You can also use GitHub Desktop or the VS Code Source Control controls to commit and push.

Once the branch is pushed to GitHub:

1. Open [the repository on GitHub](https://github.com/audreydeng/audreydeng.github.io).
2. Select the **Pull requests** tab, then **New pull request**.
3. Set the base branch to `main` and compare it with your update branch. Review the changed files, then select **Create pull request** and add a short description.
4. Review the pull request on GitHub. When it is ready, select **Merge pull request** and confirm.
5. After the pull request is merged into `main`, GitHub Actions builds and deploys the site to GitHub Pages. On the repository's **Actions** tab, open the **Deploy to GitHub Pages** run and wait for both build and deploy jobs to succeed. The deployment job provides the published URL.

The first time GitHub Pages is configured, open the repository's **Settings > Pages** and make sure the build and deployment source is set to **GitHub Actions**. You normally do not need to start a deployment manually: merging a pull request into `main` triggers it. If a run fails, open it in **Actions** to see the error before trying again.
Editable long biography
=======================

File: `biographies/long.txt`

Rules:
- This is a plain UTF-8 text file. You can edit it with any text editor.
- Paragraphs are separated by blank lines.
- To insert an image from the `pictures/` folder, place the image filename on its own line, for example:

  RogueResonance.jpg

  That will insert the image at that point in the biography. The file must be in the `pictures/` folder (or a relative path from the site root).
- You can also use a simple Markdown-like image line: `![](pictures/kat-concert-photo.jpeg)` and it will be recognised.
- Any other lines are treated as plain text and wrapped in <p>...</p> when displayed.

Editing:
- Save changes and refresh `biography.html` in your browser to see updates.
- For larger formatting (headings, lists, links), you can add simple HTML tags directly — the renderer will allow basic tags like <strong>, <em>, and <a href="...">.

Notes:
- Do not include untrusted scripts in this file. The renderer treats the file as content, not executable code.

YouTube embedding
-----------------
- To embed a YouTube video, place the full YouTube link on its own line in `long.txt`, for example:

  https://www.youtube.com/watch?v=eIjWxs8DPXM

- If you put several YouTube links on one line separated by commas, they will be displayed as a simple carousel (previous/next buttons):

  https://www.youtube.com/watch?v=eIjWxs8DPXM, https://youtu.be/o2rs2eyD_5U

The renderer accepts both `youtube.com/watch?v=ID` and `youtu.be/ID` formats.

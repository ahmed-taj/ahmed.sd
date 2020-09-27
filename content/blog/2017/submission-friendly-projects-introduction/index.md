---
title: "Submission friendly projects: Introduction"
date: 2017-10-08T19:47:06.000Z
tags: [github, markdown, idea]
description: Can we improve the way we submit issues to Github?
cover_image: ./submitter.png
---

> Inspired by [Ilango](https://dev.to/ilangorajagopal)'s `Idea to Launch` [series](https://dev.to/ilangorajagopal/idea-to-launch-building-a-side-project-in-public-2ae).

This is part 1 of a series of posts I'm planning to write while I'm building my open source side-project: **Submitter**. I'll be writing regularly(hopefully) about my work including all the challenges I came through.

**Other posts:**

- **Part 2:** [The format and Stack][part-2]

## The problem

Earlier in the past year, GitHub announced [Issue and Pull Request templates](https://github.com/blog/2111-issue-and-pull-request-templates). They meant to be helpful for contributors to share the right details at the start of a thread. While it's cool, I think it could be better!

I've submitted a lot of issues/PRs to many OSS projects, all of them has a different issue and PR templates. Some of those templates are easy to follow, especially if the project uses GitHub issues for bugs reporting only. However, I came across many hard to follow (or just too long) templates. I don't know if it's just me but I find myself sometimes not sure whether to remove a section or just leave it there? do I need to check that box? or ..? This makes me in some cases navigate through the previous issues/PRs opened in that repository to check how other people formatted their description.

## The idea (experiment)

Well, I can't say it's a solution because I'm not sure if it would actually solve the problem, but at least it's my experiment to make submitting issues to GitHub less painful.

The idea is to build a [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown)-based conventional issue/PR templates specification that would make the issue/PR templates easier to read programmatically for later rendering. Don't get scared, I'm just too bad at describing things. Just take a look at this simple issue template:

```markdown
I'm submitting

- [ ] A feature request
- [ ] A bug
- [ ] Other ..

## Description

[Write here]
```

If all templates are that simple my problem won't exists, however, most templates need more info (i.e. version if it's a bug, benefit if it's a feature request ..etc), which is good but on the other hand, makes the template a little bit hard to follow. For now, let's suppose the above template is too long and we need a better way to fill it(my project core idea).

first, let's rewrite the template again to confirm our "conventional issue/PR templates specification" (well, I lied, there is no specification yet, it's just an idea in my mind :) ):

```markdown
I'm submitting

1. [ ] A feature request
2. [ ] A bug
3. [ ] A question

## Description

(Write here)
```

Wow, and that's it! wait, what? yes, exactly!

Now let's explain the "for later rendering" part. If we pass the above "conventional" template to our renderer service (a tiny web service I need to build that understands our specification) it would output something similar to this HTML:

```HTML
I'm submitting
<select>
    <option value="x">A feature request</option>
    <option value="y">A Bug</option>
    <option value="z">A question</option>
</select>

<h2>Description</h2>
<textarea placeholder="Write here">
    <!-- A GFM friendly text area-->
</textarea>
```

> **NOTE:** for some reasons we can't use dropdown lists, we will use radio buttons instead. Check [part 2][part-2] of this series for more info.

Notice the difference? Our renderer web service converts the order list to HTML `<select>` element and the `(text)` pattern to a `<textarea>` element with a placeholder. Now, theoretically, the user can simply select their issue type from the drop-down and enter their text right into the text area (they may still use GFM), then press "submit" button and the issue would be created on their behalf on GitHub.

Of course, this isn't just about drop-down, you can use the normal GitHub checklist when appropriated, like this one:

```markdown
- [ ] I've tested my changes
- [ ] I've updated the docs
```

Also, in future, I may support showing/hiding some sections based on drop-down selection (i.e. if you select "bug" only sections related to bug reporting will be shown).

I hope you could get the idea, if not please write a comment pointing out the unclear section and I will do my best to rewrite it more clearly.

## How the final project may look like?

1. You need to open an issue in a repo (i.e. `owner/repo`)
2. You'll need to navigate to our web service URL (i.e. `ourwebservice.com`).
   The URL will look something like this: `https://ourwebservice.com/new?repo=owner/repo`
3. The web service then asks you to sign in via GitHub.
4. If you signed in, it will then fetch the template file from `owner/repo` (e.g. `.github/OUR_ISSUES_TEMPLATE.md`), parse it, then responses with the HTML rendered version of the original markdown template.
5. Then you need to fill the template form (as we shown above), and press "submit"
6. A new issue will be created on your behalf in `owner/repo` repository.
7. Done!

## What now?

I'm still validating the idea in my mind, and your feedback and thoughts are highly appreciated, just write a comment down below!

In the next post, I will show you the first draft of our simple conventional issue/PR templates.

Thank you :)

[part-2]: {{< ref "/blog/2017/submission-friendly-projects-the-format" >}}

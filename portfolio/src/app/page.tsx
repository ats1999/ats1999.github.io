import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const PrayIcon = () => (
  <svg
    fill="#000000"
    width="50px"
    height="50px"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>hands-pray</title>
    <path d="M25.525 15.024c-0.468-1.058-0.965-1.957-1.529-2.807l0.043 0.069-0.512-0.84c-0.814-1.374-1.525-2.474-2.24-3.464-0.354-0.495-0.703-0.927-1.074-1.338l0.012 0.013c-0.316-0.383-0.713-0.688-1.165-0.891l-0.020-0.008c-0.134-0.053-0.29-0.083-0.452-0.083-0.093 0-0.184 0.010-0.271 0.029l0.008-0.002c-0.998 0.156-1.831 0.751-2.309 1.577l-0.008 0.016c-0.486-0.842-1.32-1.437-2.3-1.591l-0.018-0.002c-0.079-0.017-0.169-0.027-0.262-0.027-0.163 0-0.319 0.030-0.463 0.085l0.009-0.003c-0.479 0.217-0.881 0.529-1.197 0.914l-0.005 0.006c-0.355 0.393-0.698 0.819-1.015 1.264l-0.029 0.043c-0.716 0.989-1.428 2.090-2.24 3.462l-0.508 0.832c-0.523 0.783-1.020 1.684-1.442 2.627l-0.047 0.118c-0.483 1.162-0.763 2.512-0.763 3.927 0 1.245 0.217 2.439 0.615 3.547l-0.023-0.073c0.356 0.868 0.679 1.909 0.914 2.983l0.024 0.13h-0.105c-0.69 0-1.25 0.56-1.25 1.25v3.211c0 0.69 0.56 1.25 1.25 1.25h17.712c0.69-0.001 1.249-0.56 1.25-1.25v-3.211c-0.001-0.69-0.56-1.249-1.25-1.25h-0.106c0.266-1.224 0.595-2.281 1.005-3.297l-0.048 0.135c0.365-1.020 0.575-2.197 0.575-3.424 0-1.416-0.281-2.767-0.79-3.999l0.025 0.070zM16.001 10.426l0.006-0.013 1.824 4.059c-0.939 0.261-1.648 1.027-1.822 1.98l-0.002 0.015c-0.176-0.968-0.885-1.734-1.806-1.992l-0.018-0.004zM8.658 21.549c-0.272-0.773-0.429-1.665-0.429-2.594 0-1.074 0.21-2.099 0.592-3.036l-0.019 0.054c0.414-0.921 0.849-1.701 1.341-2.44l-0.039 0.062 0.532-0.873c0.773-1.305 1.445-2.344 2.113-3.268 0.293-0.413 0.581-0.772 0.889-1.114l-0.009 0.011 0.022-0.024c0.069 0.038 0.125 0.092 0.164 0.157l0.001 0.002c0.025 0.098 0.040 0.209 0.040 0.325 0 0.208-0.047 0.406-0.132 0.582l0.004-0.008-2.892 6.436c-0.069 0.15-0.109 0.327-0.109 0.512 0 0 0 0.001 0 0.001v-0 6.437c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-5.632c0-0.164 0.030-0.359 0.172-0.359s0.173 0.195 0.173 0.359v3.218c0 0.001 0 0.001 0 0.002 0 0.125 0.019 0.245 0.053 0.358l-0.002-0.009 1.127 3.85v0.984h-4.964c-0.272-1.514-0.663-2.853-1.178-4.129l0.050 0.139zM23.613 28.75h-15.212v-0.711h15.212zM18.025 25.539h-0.761v-0.984l1.128-3.85c0.032-0.105 0.050-0.226 0.051-0.351v-3.218c0-0.164 0.029-0.359 0.172-0.359s0.172 0.195 0.172 0.359v5.632c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-6.437c0-0 0-0 0-0.001 0-0.185-0.040-0.361-0.113-0.52l0.003 0.008-2.9-6.453c-0.077-0.163-0.121-0.355-0.121-0.556 0-0.114 0.014-0.225 0.041-0.331l-0.002 0.009c0.040-0.069 0.096-0.124 0.164-0.162l0.002-0.001 0.043 0.046c0.29 0.324 0.571 0.676 0.833 1.043l0.025 0.037c0.668 0.925 1.342 1.964 2.115 3.27q0.264 0.444 0.537 0.881c0.452 0.676 0.885 1.454 1.256 2.267l0.043 0.105c0.363 0.883 0.574 1.908 0.574 2.982 0 0.911-0.152 1.786-0.431 2.602l0.017-0.056c-0.472 1.151-0.869 2.506-1.126 3.911l-0.020 0.128zM7.118 12.559c0.083-0.163 0.132-0.355 0.132-0.559 0-0.487-0.278-0.908-0.684-1.115l-0.007-0.003-4-2c-0.166-0.087-0.362-0.138-0.571-0.138-0.69 0-1.25 0.56-1.25 1.25 0 0.492 0.284 0.917 0.696 1.121l0.007 0.003 4 2c0.163 0.083 0.355 0.132 0.559 0.132 0.487 0 0.908-0.278 1.115-0.684l0.003-0.007zM7.116 8.884c0.226 0.225 0.537 0.363 0.881 0.363 0.69 0 1.25-0.56 1.25-1.25 0-0.344-0.139-0.655-0.363-0.881l-6-6c-0.226-0.225-0.537-0.363-0.881-0.363-0.69 0-1.25 0.56-1.25 1.25 0 0.344 0.139 0.655 0.363 0.881l-0-0zM29.441 8.882l-4 2c-0.42 0.207-0.704 0.633-0.704 1.124 0 0.69 0.56 1.25 1.25 1.25 0.208 0 0.405-0.051 0.578-0.141l-0.007 0.003 4-2c0.407-0.212 0.679-0.63 0.679-1.112 0-0.69-0.56-1.25-1.25-1.25-0.199 0-0.387 0.046-0.554 0.129l0.007-0.003zM23.115 8.884c0.227 0.226 0.539 0.366 0.885 0.366s0.658-0.14 0.885-0.366v0l6-6c0.226-0.226 0.366-0.539 0.366-0.884 0-0.691-0.56-1.251-1.251-1.251-0.346 0-0.658 0.14-0.885 0.367v0l-6 6c-0.225 0.227-0.365 0.539-0.365 0.884s0.139 0.657 0.365 0.884l-0-0zM20.389 5.092c0.168 0.089 0.367 0.142 0.578 0.142 0.48 0 0.896-0.27 1.106-0.666l0.003-0.007 1.033-1.983c0.089-0.167 0.141-0.366 0.141-0.577 0-0.691-0.56-1.251-1.251-1.251-0.48 0-0.896 0.27-1.106 0.667l-0.003 0.007-1.033 1.983c-0.089 0.167-0.141 0.366-0.141 0.577 0 0.479 0.27 0.896 0.665 1.105l0.007 0.003zM9.925 4.561c0.213 0.404 0.63 0.675 1.11 0.675 0.69 0 1.25-0.559 1.25-1.25 0-0.212-0.053-0.412-0.146-0.587l0.003 0.007-1.033-1.983c-0.213-0.404-0.63-0.675-1.11-0.675-0.69 0-1.25 0.559-1.25 1.25 0 0.212 0.053 0.412 0.146 0.587l-0.003-0.007z"></path>
  </svg>
);

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <div>
                <PrayIcon />
              </div>
              <div className="greet">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`नमस्ते, I'm ${DATA.name.split(" ")[0]} `}
                />
              </div>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFadeText
          className="max-w-[600px] md:text-xl"
          delay={BLUR_FADE_DELAY}
          text={DATA.title}
        />
        <br />
        {DATA.description.map((desc, idx) => <React.Fragment key={idx}>
          <BlurFadeText
            className="max-w-[600px]"
            delay={BLUR_FADE_DELAY}
            text={desc}
          /><br />
        </React.Fragment >)}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="latest-blogs">
        <div className="space-y-5 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Latest Blogs{" "}
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8 * 0.05}>
            <ul
              style={{
                listStyleType: "disclosure-closed",
                gap: "10px",
              }}
              id="latest-blogs-list"
            >
              {[{ title: "View More", url: "/blog/" }, ...DATA.latestBlogs].reverse().map((blog, id) => (
                <li
                  key={blog.url}
                  style={{
                    marginBottom: "10px",
                  }}
                  className="latest-blogs-list-item"
                >
                  <Link
                    className="text-blue-500 hover:underline"
                    href={blog.url}
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  open source favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  with a direct question on linkedin
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

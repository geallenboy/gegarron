'use client'
import Image from 'next/image'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import git from '@/public/svg/git.svg'
import cloudflare from '@/public/svg/cloudflare.svg'
import css from '@/public/svg/css.svg'
import docker from '@/public/svg/docker.svg'
import github from '@/public/svg/github.svg'
import javascript from '@/public/svg/javascript.svg'
import nginx from '@/public/svg/nginx.svg'
import nodedotjs from '@/public/svg/nodedotjs.svg'
import postgresql from '@/public/svg/postgresql.svg'
import react from '@/public/svg/react.svg'
import supabase from '@/public/svg/supabase.svg'
import tailwindcss from '@/public/svg/tailwindcss.svg'
import typescript from '@/public/svg/typescript.svg'
import vercel from '@/public/svg/vercel.svg'


export default function IconCloud() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        <Image src={git} alt="git" className="h-10 w-10 " />
        <Image src={cloudflare} alt="cloudflare" className="h-10 w-10 " />
        <Image src={css} alt="cloudflare" className="h-10 w-10 " />
        <Image src={docker} alt="cloudflare" className="h-10 w-10 " />
        <Image src={typescript} alt="cloudflare" className="h-10 w-10 " />
        <Image src={postgresql} alt="cloudflare" className="h-10 w-10 " />
        <Image src={react} alt="cloudflare" className="h-10 w-10 " />
        <Image src={vercel} alt="cloudflare" className="h-10 w-10 " />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <Image src={supabase} alt="git" className="h-10 w-10 " />
        <Image src={github} alt="git" className="h-10 w-10 " />
        <Image src={javascript} alt="cloudflare" className="h-10 w-10 " />
        <Image src={tailwindcss} alt="cloudflare" className="h-10 w-10 " />
        <Image src={nginx} alt="cloudflare" className="h-10 w-10 " />
        <Image src={nodedotjs} alt="cloudflare" className="h-10 w-10 " />
      </OrbitingCircles>
    </div>
  )
}


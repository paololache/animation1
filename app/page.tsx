import { ArrowDown, Briefcase, LayoutDashboard, Rocket, Smartphone } from "lucide-react";
import type { ReactNode } from "react";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";
import { TransformPlayground } from "@/components/transform-playground";

const nav = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#usos", label: "Usos" },
  { href: "#instalacion", label: "Instalación" },
  { href: "#propiedades", label: "Propiedades" },
  { href: "#preguntas", label: "Preguntas" },
];

const useCases = [
  {
    icon: Rocket,
    title: "Lanzamiento de producto",
    text: "Presenta la captura principal de tu app como si la estuvieras levantando frente al visitante.",
  },
  {
    icon: LayoutDashboard,
    title: "Demo de panel o dashboard",
    text: "Muestra una vista completa de tu interfaz sin obligar a nadie a registrarse primero.",
  },
  {
    icon: Smartphone,
    title: "Presentación de app",
    text: "Dentro de la pantalla puedes poner una imagen, un video o componentes interactivos reales.",
  },
  {
    icon: Briefcase,
    title: "Portafolio",
    text: "Destaca un proyecto con un momento de entrada claro antes de pasar a los detalles.",
  },
];

const steps = [
  {
    title: "Instala la dependencia",
    text: "La animación usa los hooks useScroll y useTransform de framer-motion.",
    code: "npm install framer-motion",
  },
  {
    title: "Copia el componente",
    text: "Guárdalo en components/ui, la carpeta que usa shadcn para los componentes de interfaz.",
    code: "components/ui/container-scroll-animation.tsx",
  },
  {
    title: "Envuelve tu contenido",
    text: "Pasa el título en titleComponent y lo que va dentro de la pantalla como children.",
    code: `<ContainerScroll titleComponent={<h1>Tu título</h1>}>
  <Image src="/captura.png" alt="…" width={1400} height={720} />
</ContainerScroll>`,
  },
];

const props = [
  {
    name: "titleComponent",
    type: "string | ReactNode",
    text: "Texto o elementos que aparecen sobre la pantalla. Sube 100 px mientras haces scroll.",
  },
  {
    name: "children",
    type: "ReactNode",
    text: "Contenido que se muestra dentro de la pantalla. Se recorta con bordes redondeados.",
  },
];

const faqs = [
  {
    q: "¿Funciona con el App Router de Next.js?",
    a: 'Sí. El archivo empieza con "use client" porque usa hooks del navegador, así que puedes importarlo desde cualquier página o componente de servidor.',
  },
  {
    q: "¿Qué pasa en celulares?",
    a: "El componente mide el ancho de la ventana. Con 768 px o menos, la pantalla escala de 0.7 a 0.9 en lugar de 1.05 a 1, la sección mide 60rem de alto en vez de 80rem y el relleno es menor.",
  },
  {
    q: "¿Puedo poner un video o un iframe dentro?",
    a: "Sí. Todo lo que pases como children se muestra dentro de la pantalla, con overflow oculto y bordes redondeados.",
  },
  {
    q: "¿Cuándo empieza y termina la animación?",
    a: "El progreso va de 0, cuando la sección entra por abajo de la ventana, a 1, cuando termina de salir. Por eso conviene dejar espacio para hacer scroll antes y después.",
  },
  {
    q: "¿Respeta la preferencia de movimiento reducido?",
    a: "No por sí solo: los valores siguen al scroll siempre. Si tu público lo necesita, puedes leer prefers-reduced-motion y mostrar la pantalla sin inclinación.",
  },
  {
    q: "¿Cambia algo en modo oscuro?",
    a: "El fondo interno de la pantalla pasa de gris claro a zinc oscuro cuando la página usa la clase dark de Tailwind.",
  },
];

function SectionHeading({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <header className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-lg text-ink/75">{children}</p>}
    </header>
  );
}

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 z-20 border-b border-rule/70 bg-mist/85 backdrop-blur" aria-label="Secciones">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 md:px-8">
          <a href="#" className="font-display text-lg font-bold text-ink">
            Container<span className="text-cobalt">Scroll</span>
          </a>
          <ul className="hidden gap-6 text-sm text-ink/80 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-cobalt">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#instalacion"
            className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white hover:bg-cobalt"
          >
            Empezar
          </a>
        </div>
      </nav>

      <main className="flex-1">
        <HeroScrollDemo />

        <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8">
          <p className="max-w-3xl font-display text-2xl leading-snug text-ink md:text-3xl">
            <span className="bg-signal/40 px-1">Container Scroll</span> une el movimiento de una pantalla al scroll de la
            página: empieza inclinada, se endereza mientras bajas y el título sube para dejarle espacio.
          </p>
          <a href="#como-funciona" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cobalt hover:underline">
            Ver cómo funciona <ArrowDown className="size-4" aria-hidden />
          </a>
        </section>

        <section aria-labelledby="como-funciona" className="border-t border-rule bg-white/50 py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading id="como-funciona" eyebrow="Cómo funciona" title="Tres valores, un solo control">
              El componente convierte el progreso del scroll en tres transformaciones. Mueve el control para ver los valores
              exactos que se aplican en cada punto.
            </SectionHeading>
            <div className="mt-14">
              <TransformPlayground />
            </div>
          </div>
        </section>

        <section aria-labelledby="usos" className="border-t border-rule py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading id="usos" eyebrow="Usos" title="Dónde tiene sentido">
              Funciona mejor como primera sección de una página, cuando tienes una imagen o interfaz que merece ser lo
              primero que se vea.
            </SectionHeading>
            <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-rule bg-rule sm:grid-cols-2">
              {useCases.map(({ icon: Icon, title, text }) => (
                <li key={title} className="bg-mist p-8">
                  <Icon className="size-6 text-cobalt" aria-hidden />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-ink/75">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="instalacion" className="border-t border-rule bg-ink py-24 text-white">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <header className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Instalación</p>
              <h2 id="instalacion" className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Listo en tres pasos
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Necesitas un proyecto con React, TypeScript y Tailwind CSS. Si usas shadcn/ui, ya tienes todo lo demás.
              </p>
            </header>
            <ol className="mt-14 grid gap-10 lg:grid-cols-3">
              {steps.map((step, i) => (
                <li key={step.title} className="flex min-w-0 flex-col">
                  <span className="font-display text-5xl font-extrabold text-signal">{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-white/70">{step.text}</p>
                  <pre className="mt-5 overflow-x-auto rounded-xl border border-white/10 bg-white/5 p-4 font-mono text-sm text-white/90">
                    <code>{step.code}</code>
                  </pre>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="propiedades" className="border-t border-rule py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading id="propiedades" eyebrow="Propiedades" title="Lo que recibe el componente">
              No necesita contexto, proveedores ni estado externo. Solo dos propiedades.
            </SectionHeading>
            <div className="mt-14 overflow-x-auto">
              <table className="w-full min-w-[36rem] text-left">
                <thead className="border-b border-ink font-mono text-xs uppercase tracking-wider text-ink/60">
                  <tr>
                    <th scope="col" className="py-3 pr-6 font-normal">Propiedad</th>
                    <th scope="col" className="py-3 pr-6 font-normal">Tipo</th>
                    <th scope="col" className="py-3 font-normal">Descripción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rule">
                  {props.map((p) => (
                    <tr key={p.name}>
                      <th scope="row" className="py-5 pr-6 font-mono text-sm font-medium text-cobalt">{p.name}</th>
                      <td className="py-5 pr-6 font-mono text-sm text-ink/80">{p.type}</td>
                      <td className="py-5 text-ink/80">{p.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section aria-labelledby="preguntas" className="border-t border-rule bg-white/50 py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-8 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading id="preguntas" eyebrow="Preguntas frecuentes" title="Antes de usarlo" />
            <div className="divide-y divide-rule border-y border-rule">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold text-ink">
                    {f.q}
                    <span className="font-mono text-cobalt transition-transform group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-ink/75">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-ink/60 md:flex-row md:justify-between md:px-8">
          <p>Hecho con Next.js, Tailwind CSS, shadcn/ui y framer-motion.</p>
          <p>Imagen de ejemplo: Unsplash.</p>
        </div>
      </footer>
    </>
  );
}

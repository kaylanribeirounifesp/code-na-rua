import Link from "next/link";
import {
  ChevronRightIcon,
  MapPinIcon,
  PhoneIcon,
  ShareIcon,
  SirenIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@/components/icons/navigation-icons";

const emergencyOptions = [
  { icon: MapPinIcon, label: "Seus dados de localização" },
  { icon: UsersIcon, label: "Contatos de emergência" },
  { icon: ShareIcon, label: "Compartilhar localização" },
  { icon: ShieldCheckIcon, label: "Orientações de segurança" },
];

export default function EmergencyScreen() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[480px] flex-col bg-background-primary">
      <header className="flex min-h-16 items-center gap-4 bg-emergency px-4 py-3 text-white">
        <Link
          aria-label="Voltar para a tela inicial"
          className="grid size-11 shrink-0 place-items-center rounded-full text-3xl leading-none focus-visible:outline-white"
          href="/home"
        >
          <span aria-hidden="true">‹</span>
        </Link>
        <h1 className="flex-1 pr-11 text-center text-xl font-extrabold">
          Emergência
        </h1>
      </header>

      <main className="flex-1">
        <section className="bg-emergency px-5 pt-8 pb-9 text-center text-white">
          <span className="mx-auto grid size-32 place-items-center rounded-full border-2 border-white/30 bg-white/10 shadow-[0_0_0_20px_rgb(255_255_255/5%)]">
            <span className="grid size-24 place-items-center rounded-full bg-white text-emergency">
              <SirenIcon className="size-16" />
            </span>
          </span>
          <h2 className="mt-8 text-3xl leading-tight font-extrabold uppercase">
            Precisa de ajuda?
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-white/95">
            Acione o botão abaixo para chamar ajuda imediatamente.
          </p>

          <a
            className="mt-7 flex min-h-20 w-full items-center justify-center gap-4 rounded-full bg-white px-5 text-lg font-extrabold uppercase text-emergency shadow-sm transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0.5"
            href="tel:190"
            aria-label="Ligar para emergência pelo 190"
          >
            <PhoneIcon className="size-8" />
            Ligar para emergência
          </a>
        </section>

        <section
          aria-label="Opções de emergência"
          className="grid gap-3 bg-white px-4 py-5"
        >
          {emergencyOptions.map(({ icon: Icon, label }, index) => (
            <button
              aria-label={`${label}. Opção ainda não configurada.`}
              className="flex min-h-20 w-full cursor-not-allowed items-center gap-4 rounded-2xl border border-border-default bg-surface-primary p-3 text-left text-text-primary shadow-sm disabled:opacity-100"
              disabled
              key={label}
              type="button"
            >
              <span
                className={
                  "grid size-14 shrink-0 place-items-center rounded-full " +
                  (index === 0
                    ? "bg-red-50 text-emergency"
                    : "bg-background-secondary text-text-primary")
                }
              >
                <Icon className="size-7" />
              </span>
              <span className="min-w-0 flex-1 text-lg font-bold leading-tight">
                {label}
              </span>
              <ChevronRightIcon className="size-7 shrink-0 text-zinc-500" />
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}

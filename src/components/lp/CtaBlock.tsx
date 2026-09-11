import { anton } from "./fonts";
import { HashJumpLink } from "./hash-jump-link";

export function CtaBlock() {
	return (
		<section className="my-16 lg:my-24 rounded-3xl bg-[#1c50a1] text-white px-6 py-14 lg:px-16 lg:py-20 text-center">
			<p
				className={`${anton.className} text-sm tracking-[0.3em] uppercase text-white/60 mb-4`}
			>
				Contact
			</p>
			<h2 className="text-2xl lg:text-4xl font-black tracking-tight mb-5">
				お気軽にご相談ください
			</h2>
			<p className="text-white/75 leading-loose mb-10">
				「何を頼めばいいかまだ分からない」という状態での相談で大丈夫です。
				<br className="hidden lg:inline" />
				初回の相談は無料です。
			</p>
			{/* 地域名を本文に載せるための1行。title / description / JSON-LD には
			    あるが、本文には「岩手」「奥州」が一度も出ていなかった（地域つき検索で不利）。
			    この CtaBlock は LP 3ページ共通なので、ここに置けば全ページに入る。 */}
			<p className="text-white/60 text-sm leading-loose mb-8">
				岩手県奥州市を拠点に、岩手県内は対面で対応しています。
			</p>
			<HashJumpLink
				href="/#contact"
				className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-base font-bold text-[#1c50a1] transition-transform hover:scale-[1.03] active:scale-95"
			>
				無料で相談する
				<span
					aria-hidden
					className="transition-transform group-hover:translate-x-1"
				>
					→
				</span>
			</HashJumpLink>
		</section>
	);
}

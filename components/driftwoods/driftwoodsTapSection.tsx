// /home/Dirty-Drift/components/driftwoods/driftwoodsTapSection.tsx

"use client";

import { useMemo, useState } from "react";
import styles from "./driftwoodsTapSection.module.css";
import { DRIFTWOODS_TAPS, TAP_ASSETS, type DriftwoodsTap } from "@/lib/driftwoods-taps";

function getGlassSrc(glass: DriftwoodsTap["glass"]) {
  return glass === "mug" ? TAP_ASSETS.glass.mug : TAP_ASSETS.glass.pint;
}

export default function DriftwoodsTapSection() {
  const [activeId, setActiveId] = useState<DriftwoodsTap["id"]>("805-blonde");

  const activeBeer = useMemo(
    () => DRIFTWOODS_TAPS.find((beer) => beer.id === activeId) ?? DRIFTWOODS_TAPS[0],
    [activeId]
  );

  const liquidMaskClass =
    activeBeer.glass === "mug" ? styles.liquidMaskMug : styles.liquidMaskPint;

  const liquidStyle = {
    height: `${activeBeer.fillPercent}%`,
    background: `linear-gradient(180deg, ${activeBeer.liquidTop} 0%, ${activeBeer.liquidBottom} 100%)`,
    boxShadow: `0 0 28px ${activeBeer.liquidGlow}, inset 0 10px 24px rgba(255,255,255,0.16)`,
  };

  return (
    <section className={styles.section} id="driftwoods-tap-system">
      <div className={styles.inner}>
        <aside className={`${styles.panel} ${styles.leftRail}`}>
          <div className={styles.leftRailHeader}>
            <span className={styles.kicker}>Interactive Tap System</span>
            <h2 className={styles.title}>Driftwoods on Tap</h2>
            <p className={styles.subcopy}>
              Pick a handle. The pour updates. The card swings in. Done.
            </p>
          </div>

          <div className={styles.handleGrid}>
            {DRIFTWOODS_TAPS.map((beer) => {
              const active = beer.id === activeBeer.id;
              return (
                <button
                  key={beer.id}
                  type="button"
                  onClick={() => setActiveId(beer.id)}
                  className={`${styles.handleButton} ${active ? styles.handleButtonActive : ""}`}
                  aria-pressed={active}
                  aria-label={`Show ${beer.name}`}
                >
                  <div className={styles.handleImageWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={beer.handleSrc}
                      alt={beer.name}
                      className={styles.handleImage}
                      draggable={false}
                    />
                  </div>

                  <div className={styles.handleText}>
                    <span className={styles.handleName}>{beer.name}</span>
                    <span className={styles.handleMeta}>
                      {beer.style} • ABV {beer.abv}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        <div className={`${styles.panel} ${styles.centerStage}`}>
          <div className={styles.stageShell}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={TAP_ASSETS.system.png}
              alt=""
              aria-hidden="true"
              className={styles.systemBackdrop}
            />

            <div
              className={styles.stageGlow}
              style={{ background: activeBeer.liquidGlow }}
              aria-hidden="true"
            />

            <div className={styles.glassWrap}>
              <div className={liquidMaskClass}>
                <div className={styles.liquidFill} style={liquidStyle}>
                  <div className={styles.liquidSheen} />
                </div>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getGlassSrc(activeBeer.glass)}
                alt={`${activeBeer.name} glass preview`}
                className={styles.glassShell}
                draggable={false}
              />
            </div>

            <div className={styles.metaDock}>
              <div className={styles.metaNameRow}>
                <h3 className={styles.metaName}>{activeBeer.name}</h3>
                <span className={styles.metaAbv}>ABV {activeBeer.abv}</span>
              </div>
              <div className={styles.metaStyle}>{activeBeer.style}</div>
            </div>
          </div>
        </div>

        <div className={`${styles.panel} ${styles.rightCard}`}>
          <div className={styles.cardFrame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={activeBeer.cardSrc}
              src={activeBeer.cardSrc}
              alt={`${activeBeer.name} info card`}
              className={styles.cardImage}
              draggable={false}
            />
          </div>
          <div className={styles.footerLine}>Select a handle to change the featured pour</div>
        </div>
      </div>
    </section>
  );
}

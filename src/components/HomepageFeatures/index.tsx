import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Documents",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        各プロジェクトで使用したドキュメントを掲載しています.わからないことがあればドキュメントを読んで解決しましょう.
      </>
    ),
  },
  {
    title: "Knowledge",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        各プロジェクトで獲得した知識を掲載しています.積極的に書き込んでいきましょう.
      </>
    ),
  },
  {
    title: "Blog",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        各プロジェクトでの活動をブログで記録しています.活動の記録を残しましょう.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

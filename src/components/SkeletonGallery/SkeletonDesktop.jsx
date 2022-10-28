import React from "react"
import ContentLoader from "react-content-loader"

export const SkeletonDesktop = () => (
    <ContentLoader
        speed={2}
        width={`100%`}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#d6d6d6"
        foregroundColor="#ebebeb"
    >
        <rect x="9" y="22" rx="10" ry="10" width="98%" height="250" />
        <rect x="9" y="290" rx="10" ry="10" width="31%" height="80" />
        <rect x="140" y="290" rx="10" ry="10" width="31%" height="80" />
        <rect x="275" y="290" rx="10" ry="10" width="31%" height="80" />
    </ContentLoader>
);
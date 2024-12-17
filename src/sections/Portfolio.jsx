import React, { useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import portolio1 from "../assets/portfolio/portfolio1.png"
import portolio2 from "../assets/portfolio/portfolio2.png"
import ModalPortfolioDetail from "../components/ModalPortfolioDetail";
import { DartIcon, FlutterIcon, NuxtIcon, TailwindCssIcon, VueIcon } from "../assets/Icons";

const Portfolio = () => {

    const [selectedPortfolio, setSelectedPortfolio] = useState(null);


    const portfolios = [
        {
            id: 1,
            name: 'my-money',
            description: 'desc',
            sourceCode: 'https://github.com/iqbalf-a/my-money',
            technologies: [
                <DartIcon width={50} height={50} />,
                <FlutterIcon width={50} height={50} />
            ],
            image: portolio1,
            demoUrl: 'https://www.figma.com/design/dcilbSAPYrgk8rFPTpW5tc/MOney-Lovers?m=auto&t=ZBmj3dZiOyskz9zJ-6'
        }, {
            id: 2,
            name: 'noveltoon-clone',
            description: 'clone noveltoon',
            sourceCode: 'https://github.com/iqbalf-a/my-noveltoon-clone',
            technologies: [
                <VueIcon width={50} height={50} />,
                <NuxtIcon width={50} height={50} />,
                <TailwindCssIcon width={50} height={50} />
            ],
            image: portolio2,
            demoUrl: 'https://my-noveltoon-clone.pages.dev/'
        },
    ]

    const showPortfolioDetail = (itemPortfolio) => {
        setSelectedPortfolio(itemPortfolio)
    }

    const closeModal = () => {
        setSelectedPortfolio(null)
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <p className="text-2xl font-semibold">Project</p>
            <div className="flex gap-10 mt-4">
                {portfolios.map((itemPortfolio) => (
                    <PortfolioCard key={itemPortfolio.id} itemPortfolio={itemPortfolio} onShowDetail={showPortfolioDetail} />
                ))}
            </div>
            <ModalPortfolioDetail itemPortfolio={selectedPortfolio} onClose={closeModal} />
        </div>
    )
}

export default Portfolio;
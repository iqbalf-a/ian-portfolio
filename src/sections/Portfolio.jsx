import React, { useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import portolio1 from "../assets/portfolio/portfolio1.png"
import ModalPortfolioDetail from "../components/ModalPortfolioDetail";
import { DartIcon, FlutterIcon, NuxtIcon, TailwindCssIcon, VueIcon } from "../assets/Icons";

const Portfolio = () => {

    const [selectedPortfolio, setSelectedPortfolio] = useState(null);


    const portfolios = [
        {
            id: 1,
            name: 'my-money',
            description: 'Sistem yang dapat memudahkan anda megelola penghasilan dan pengeluaran uang anda.',
            sourceCode: 'https://saus-code',
            technologies: [
                <DartIcon width={50} height={50} />,
                <FlutterIcon width={50} height={50} />
            ],
            image: portolio1,
            demoUrl: ''
        }, {
            id: 2,
            name: 'noveltoon_clone',
            description: 'clone noveltoon',
            sourceCode: 'pepepe',
            technologies: [
                <VueIcon width={50} height={50} />,
                <NuxtIcon width={50} height={50} />,
                <TailwindCssIcon width={50} height={50} />
            ],
            image: portolio1,
            demoUrl: 'https://noveltoondevbla.combla'
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
            <p className="text-2xl font-semibold">Portfolio</p>
            <div className="flex gap-6 mt-4">
                {portfolios.map((itemPortfolio) => (
                    <PortfolioCard key={itemPortfolio.id} itemPortfolio={itemPortfolio} onShowDetail={showPortfolioDetail} />
                ))}
            </div>
            <ModalPortfolioDetail itemPortfolio={selectedPortfolio} onClose={closeModal} />
        </div>
    )
}

export default Portfolio;
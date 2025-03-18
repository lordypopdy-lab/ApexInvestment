import React, { useEffect } from "react";

const Widget102 = () => {

    useEffect(() => {
        // Create a script element
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        script.async = true;

        // Widget configuration
        script.innerHTML = JSON.stringify({
            symbol: "BINANCE:BNBUSDT",
            height: 220,
            locale: "en",
            dateRange: "12M",
            colorTheme: "dark",
            trendLineColor: "rgba(41, 98, 255, 1)",
            underLineColor: "rgba(41, 98, 255, 0.3)",
            underLineBottomColor: "rgba(41, 98, 255, 0)",
            isTransparent: true,
            autosize: true,
            largeChartUrl: "",
        });

        const container = document.querySelector(".tradingview-widget-container__widget");
        if (container) {
            container.appendChild(script);
        }

        return () => {
            if (container) {
                container.innerHTML = ""; 
            }
        };
    }, []);
    return (
        <div className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
                <a
                    href="https://www.tradingview.com/symbols/BNBUSDT/?exchange=BINANCE"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <span className="blue-text">BNBUSDT Rates</span>
                </a>{" "}
                by TradingView
            </div>
        </div>
    )
}

export default Widget102

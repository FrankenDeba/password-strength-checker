import ReactSpeedometer from "react-d3-speedometer";
import "./Meter.style.css";

//  0 - 100 poor
// 100 - 200 moderate
// 200+ - strong

export default function Meter({ score }) {
  return (
    <div className="meter__container">
      <ReactSpeedometer
        value={Math.min(parseInt(score), 300)}
        maxValue={300}
        segments={3}
        needleColor="#680E4B"
        textColor="#00c2d1"
        valueTextFontSize="24px"
        paddingVertical={10}
        segmentColors={[
          "#F1C0E8",
          // "#d90429",
          // "#fb8500",
          "#FF9B54",
          "#57cc99"
        ]}
        customSegmentLabels={[
          {
            text: "Poor",
            fontSize: "16px",
            color: "#F1C0E8",
            position: "OUTSIDE"
          },
          {
            text: "Moderate",
            fontSize: "16px",
            color: "#FF9B54",
            position: "OUTSIDE"
          },
          {
            text: "Strong",
            fontSize: "16px",
            color: "#57cc99",
            position: "OUTSIDE"
          }
        ]}
      />
    </div>
  );
}

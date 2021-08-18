import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { TypeStyle } from "utils/TypeStyle";

interface PokemonRadarChartProps {
  type: string;
  data: any;
}

const PokemonRadarChart = ({ data, type }: PokemonRadarChartProps) => {
  const [radarData, SetRadarData] = useState<any>([]);
  const radarcolors = TypeStyle(type);

  useEffect(() => {
    console.log(data);
    data.map((obj: any) => {
      console.log(obj.pokemon_v2_stat.name + " : " + obj.base_stat);

      const stat = {
        subject: obj.pokemon_v2_stat.name,
        A: obj.base_stat,
        fullMark: 255,
      };

      var stats = radarData;
      stats.push(stat);
      SetRadarData(stats);
    });
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="100%" data={radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Stats"
          dataKey="A"
          stroke={radarcolors.primaryColor}
          fill={radarcolors.secondaryColor}
          fillOpacity={0.55}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PokemonRadarChart;

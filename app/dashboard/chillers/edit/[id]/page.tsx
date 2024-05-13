"use client";

import ChillerForm from "@/components/Forms/ChillerForm/ChillerForm";
import { useGetChillers } from "@/utils/hooks/useGetChillers";
import { FormType } from "@/utils/types/form";
import { useEffect, useState } from "react";

interface ValveEditProps {
  params: {
    id: string;
  };
}
const ChillerEdit: React.FC<ValveEditProps> = ({ params: { id } }) => {
  const { chiller, chillerCircuits, chillerPowerConsumption } =
    useGetChillers(id);
  const [editValues, setEditValues] = useState<any>(null);

  useEffect(() => {
    if (chiller && chillerCircuits && chillerPowerConsumption) {
      const initialValues = {
        firma: chiller.firma,
        type: chiller.type,
        serialNumber: chiller.serialNumber,
        description: chiller.description || undefined,
        pollution: chiller.pollution,
        termalInsulation: chiller.termalInsulation,
        termalAndPressureControl: chiller.termalAndPressureControl,
        supplyVoltage: chiller.supplyVoltage,
        supplyPhase: chiller.supplyPhase,
        measuredVoltage_1: chiller.measuredVoltage_1,
        measuredVoltage_2: chiller.measuredVoltage_2,
        measuredVoltage_3: chiller.measuredVoltage_3,
        interphaseOK: chiller.interphaseOK,
        interphase: chiller.interphase || undefined,
        freonType: chiller.freonType,
        freonAmount: chiller.freonAmount,
        refrigerationCircuits: chiller.refrigerationCircuits,
        driverType: chiller.driverType,
        refrigerant: chiller.refrigerant,
        airTemperature: chiller.airTemperature,
        oilLevel: chiller.oilLevel,
        indicatorColor: chiller.indicatorColor,
        tightSystem: chiller.tightSystem,
        currentConsumption: chiller.currentConsumption,
        fansConsumption: chiller.fansConsumption,
        highPressure: chiller.highPressure,
        lowPressure: chiller.lowPressure,
        antiFrezzeTermostat: chiller.antiFrezzeTermostat,
        settingsTemperature: chiller.settingsTemperature,
        controlledParameter: chiller.controlledParameter,
        controlMethod: chiller.controlMethod,
        leakGasTest: chiller.leakGasTest,
        gasAdded: chiller.gasAdded,
        gasRegain: chiller.gasRegain,
        circuits: chillerCircuits.map((circuit) => ({
          dischargePressure: circuit.dischargePressure,
          condensationTemperature: circuit.condensationTemperature,
          subcooling: circuit.subcooling,
          airTemperature: circuit.airTemperature,
          suctionPressure: circuit.suctionPressure,
          suctionTemperature: circuit.suctionTemperature,
          overHeat: circuit.overHeat,
          inTemperature: circuit.inTemperature,
          outTemperature: circuit.outTemperature,
          inWaterPressure: circuit.inWaterPressure,
          outWaterPressure: circuit.outWaterPressure,
        })),
        powerConsumptions: chillerPowerConsumption.map((power) => ({
          deviceType: power.deviceType,
          amperage_1: power.amperage_1,
          amperage_2: power.amperage_2,
          amperage_3: power.amperage_3,
          interphaseOk: power.interphaseOk,
          interphase: power.interphase || undefined,
        })),
      };
      setEditValues(initialValues);
    }
  }, [chiller, chillerCircuits, chillerPowerConsumption]);
  return (
    <ChillerForm
      defaultValues={editValues}
      formType={FormType.CHILLER_EDIT}
      id={id}
      extraChillerCircuitsDataEdit={chillerCircuits}
      extraChillerPowerDataEdit={chillerPowerConsumption}
    />
  );
};

export default ChillerEdit;

"use client";

import ChillerForm from "@/components/ChillerForm/ChillerForm";
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
        firma: chiller.firma ?? undefined,
        type: chiller.type ?? undefined,
        serialNumber: chiller.serialNumber ?? undefined,
        description: chiller.description ?? undefined,
        pollution: chiller.pollution ?? undefined,
        termalInsulation: chiller.termalInsulation ?? undefined,
        termalAndPressureControl: chiller.termalAndPressureControl ?? undefined,
        supplyVoltage: chiller.supplyVoltage ?? undefined,
        supplyPhase: chiller.supplyPhase ?? undefined,
        measuredVoltage_1: chiller.measuredVoltage_1 ?? undefined,
        measuredVoltage_2: chiller.measuredVoltage_2 ?? undefined,
        measuredVoltage_3: chiller.measuredVoltage_3 ?? undefined,
        interphaseOK: chiller.interphaseOK ?? undefined,
        interphase: chiller.interphase ?? undefined,
        freonType: chiller.freonType ?? undefined,
        freonAmount: chiller.freonAmount ?? undefined,
        refrigerationCircuits: chiller.refrigerationCircuits ?? undefined,
        driverType: chiller.driverType ?? undefined,
        refrigerant: chiller.refrigerant ?? undefined,
        airTemperature: chiller.airTemperature ?? undefined,
        oilLevel: chiller.oilLevel ?? undefined,
        indicatorColor: chiller.indicatorColor ?? undefined,
        tightSystem: chiller.tightSystem ?? undefined,
        currentConsumption: chiller.currentConsumption ?? undefined,
        fansConsumption: chiller.fansConsumption ?? undefined,
        highPressure: chiller.highPressure ?? undefined,
        lowPressure: chiller.lowPressure ?? undefined,
        antiFrezzeTermostat: chiller.antiFrezzeTermostat ?? undefined,
        settingsTemperature: chiller.settingsTemperature ?? undefined,
        controlledParameter: chiller.controlledParameter ?? undefined,
        controlMethod: chiller.controlMethod ?? undefined,
        leakGasTest: chiller.leakGasTest ?? undefined,
        gasAdded: chiller.gasAdded ?? undefined,
        gasRegain: chiller.gasRegain ?? undefined,
        circuits: chillerCircuits.map((circuit) => ({
          dischargePressure: circuit.dischargePressure ?? undefined,
          condensationTemperature: circuit.condensationTemperature ?? undefined,
          subcooling: circuit.subcooling ?? undefined,
          airTemperature: circuit.airTemperature ?? undefined,
          suctionPressure: circuit.suctionPressure ?? undefined,
          suctionTemperature: circuit.suctionTemperature ?? undefined,
          overHeat: circuit.overHeat ?? undefined,
          inTemperature: circuit.inTemperature ?? undefined,
          outTemperature: circuit.outTemperature ?? undefined,
          inWaterPressure: circuit.inWaterPressure ?? undefined,
          outWaterPressure: circuit.outWaterPressure ?? undefined,
        })),
        powerConsumption: chillerPowerConsumption.map((power) => ({
          deviceType: power.deviceType ?? undefined,
          amperage_1: power.amperage_1 ?? undefined,
          amperage_2: power.amperage_2 ?? undefined,
          amperage_3: power.amperage_3 ?? undefined,
          interphaseOk: power.interphaseOk ?? undefined,
          interphase: power.interphase ?? undefined,
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

// InstructionItem.js
import React, { useState } from "react";

// CSS
import "./InstructionItem.css";

// Custom compoments

const ItemHolder = ({ itemName, itemImageUrl }) => {
  return (
    <div className="instructionItemPhoto">
      <p style={{ fontSize: "15px" }}>{itemName}</p>
      <div
        className="instructionItemPhotoPhoto"
        style={{ backgroundImage: `url(${itemImageUrl})` }}
      ></div>
    </div>
  );
};

const IngredientsFrame = ({ ingredientItems }) => {
  const ingredientItemArray = ingredientItems;
  return (
    <div className="row ingredientsFrameBody">
      <p>Ingredients:</p>
      <div className="containerForItemHolder">
        {ingredientItemArray.map((ingredient, index) => (
          <ItemHolder
            itemName={ingredient.name}
            itemImageUrl={ingredient.image}
          />
        ))}
      </div>
    </div>
  );
};

const EquipmentFrame = ({ equipmentItems }) => {
  const equimentItemArray = equipmentItems;
  return (
    <div className="row EquipmentFrameBody">
      <p>Equipment:</p>
      <div className="containerForItemHolder">
        {equimentItemArray.map((equipment, index) => (
          <ItemHolder
            itemName={equipment.name}
            itemImageUrl={equipment.image}
          />
        ))}
      </div>
    </div>
  );
};

const InstructionItem = (instructionOutput) => {
  const equipment = instructionOutput.instruction.equipment;
  const ingredients = instructionOutput.instruction.ingredients;
  const number = instructionOutput.instruction.number;
  const steps = instructionOutput.instruction.step;

  return (
    <div className="instructionBody container">
      <p
        style={{ textAlign: "center", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>No. {number}</strong>
      </p>
      <div className="row instructionsGroup">
        <h6>
          <strong>Instructions:</strong>
        </h6>
        <h6 style={{ marginTop: "-5px" }}>{steps}</h6>
      </div>
      {ingredients.length > 0 && (
        <IngredientsFrame ingredientItems={ingredients} />
      )}
      {equipment.length > 0 && <EquipmentFrame equipmentItems={equipment} />}
    </div>
  );
};

export default InstructionItem;

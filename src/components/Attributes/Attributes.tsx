import { Dispatch, SetStateAction } from 'react';
import { en } from '../../lang';

import { TAttribute } from '../../types';
import { Attribute } from './Attribute/Attribute';
import {
  title,
  titleContainer,
  attributesContainerEmpty,
  attributesContainerPopulated,
} from './Attributes.css';
import { Modal } from './Modal';

type AttributeProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  attributes: TAttribute[];
  setAttributes: Dispatch<SetStateAction<TAttribute[]>>;
};

export function Attributes({
  attributes,
  setAttributes,
  isModalOpen,
  setIsModalOpen,
}: AttributeProps) {
  function handleRemoveAttribute({ trait_type, value }: TAttribute) {
    const newAttributes = attributes.filter(
      (attribute) =>
        attribute.trait_type !== trait_type || attribute.value !== value
    );
    setAttributes(newAttributes);
  }

  return (
    <div>
      <div className={titleContainer}>
        <label className={title}>{en.common.attributes}</label>
      </div>

      {attributes.length ? (
        <div className={attributesContainerPopulated}>
          {attributes.map(({ trait_type, value }, idx) => (
            <Attribute
              value={value}
              trait_type={trait_type}
              key={`${trait_type} ${value} ${idx}`}
              handleOnClick={handleRemoveAttribute}
            />
          ))}
        </div>
      ) : (
        <div className={attributesContainerEmpty}>
          <p>No attributes currently set</p>
        </div>
      )}

      <Modal
        attributes={attributes}
        isModalOpen={isModalOpen}
        setAttributes={setAttributes}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

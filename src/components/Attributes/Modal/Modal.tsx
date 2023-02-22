import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import ReactModal from 'react-modal';
import './transition.css';

import { en } from '../../../lang';
import { button } from '../../../App.css';
import { TextInput } from '../../TextInput';
import { TAttribute } from '../../../types';
import { modal, overlay, container } from './Modal.css';

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  attributes: TAttribute[];
  setAttributes: Dispatch<SetStateAction<TAttribute[]>>;
};

export function Modal({
  isModalOpen,
  setIsModalOpen,
  attributes,
  setAttributes,
}: ModalProps) {
  const [traitType, setTraitType] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    ReactModal.setAppElement('body');
  }, []);

  function resetForm() {
    setTraitType('');
    setValue('');
  }

  function handleAddAttribute() {
    setAttributes([...attributes, { trait_type: traitType, value }]);
    setIsModalOpen(false);
    resetForm();
  }

  return (
    <ReactModal
      style={overlay}
      className={modal}
      ariaHideApp={false}
      isOpen={isModalOpen}
      closeTimeoutMS={200}
    >
      <div className={container}>
        <TextInput
          value={traitType}
          onChange={setTraitType}
          label={en.minter.form.attributes.traitType}
          placeholder={en.minter.form.attributes.traitTypePlaceholder}
        />
        <TextInput
          value={value}
          onChange={setValue}
          label={en.minter.form.attributes.value}
          placeholder={en.minter.form.attributes.valuePlaceholder}
        />

        <button type="button" className={button} onClick={handleAddAttribute}>
          {en.minter.form.attributes.add}
        </button>
        <button
          type="button"
          className={button}
          onClick={() => setIsModalOpen(false)}
        >
          {en.common.close}
        </button>
      </div>
    </ReactModal>
  );
}

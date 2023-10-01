type WalletFormInputsProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: { value: string; description: string };
};

function WalletFormInputs({ onChange, values }: WalletFormInputsProps) {
  return (
    <>
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          data-testid="value-input"
          type="number"
          value={ values.value }
          onChange={ onChange }
        />
      </label>
      <label htmlFor="description">
        Descrição:
        <input
          id="description"
          data-testid="description-input"
          type="text"
          value={ values.description }
          onChange={ onChange }
        />
      </label>
    </>
  );
}

export default WalletFormInputs;

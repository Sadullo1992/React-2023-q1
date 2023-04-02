import { useFormContext } from 'react-hook-form';

function FileInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor="file">
      Profile image
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        {...register('file', { required: true })}
      />
      {errors.file && <span className="form__error">Please, Upload your image</span>}
    </label>
  );
}

export default FileInput;

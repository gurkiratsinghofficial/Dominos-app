import { useField } from "formik";
/**
 * @description:Custom select component
 * @param {object} props
 */
export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="pizza-card-select">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

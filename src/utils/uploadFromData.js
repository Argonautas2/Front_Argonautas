import axios from 'axios';

const uploadFormData = async (formData) => {
  const formDataCopy = { ...formData };
  await Promise.all(
    Object.keys(formDataCopy).map(async (field) => {
      if (
        Object.prototype.isPrototypeOf.call(File.prototype, formData[field])
      ) {
        const dt = new FormData();
        dt.append('file', formDataCopy[field]);
        dt.append('upload_preset', 'ahqpbehg');
        dt.append('cloud_name', 'misiontic2022');
        const options = {
          method: 'POST',
          url: 'https://api.cloudinary.com/v1_1/misiontic2022/image/upload',
          data: dt,
        };
        await axios.request(options).then((response) => {
          formDataCopy[field] = response.data.url;
        });
      }
    })
  );
  return formDataCopy;
};

export { uploadFormData };

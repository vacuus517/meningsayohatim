const URL = "https://json-api.uz/api/project/tours/tours";

const deleteData = async (param) => {
  let data = null;
  let error = null;
  try {
    let response = await fetch(URL + "/" + param, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error found:" + response.status);
    }
    let result = await response.json();

    data = result;
  } catch (err) {
    error = err.message;
  }

  return { data, error };
};

export default deleteData;

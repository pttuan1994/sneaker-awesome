import { Form, InputNumber } from "antd";
import { useState } from "react";

const Combination = () => {
  let result = [];
  const [html, setHtml] = useState();

  const permute = (str, l, r) => {
    if (l == r) {
      const res = str.join("-");
      const found = result.find((item) => item === res);
      if (!found) {
        result.push(res);
      }
    } else {
      for (let i = l; i <= r; i++) {
        [str[l], str[i]] = [str[i], str[l]];
        permute(str, l + 1, r);
        [str[l], str[i]] = [str[i], str[l]];
      }
    }
  };

  const findCombinations = (reducedNum, arr = [], index = 0) => {
    if (reducedNum < 0) return;
    if (reducedNum == 0) {
      let str = [];
      for (let i = 0; i < index; i++) {
        str.push(arr[i]);
      }
      permute(str, 0, index - 1);
      return;
    }
    let prev = index == 0 ? 1 : arr[index - 1];
    for (let k = prev; k <= 2; k++) {
      arr[index] = k;
      findCombinations(reducedNum - k, arr, index + 1);
    }
  };

  const onFinish = async ({ amount }) => {
    result = [];
    await findCombinations(amount);
    setHtml(result.join("<br/>"));
    console.log("Success:", amount);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container bg-white">
      <main className="max-w-lg mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <Form
          name="combination"
          layout={"horizontal"}
          initialValues={{ amount: 3 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Number of buyers"
            name="amount"
            rules={[
              {
                required: true,
                message: "Please input your number of buyers!",
              },
            ]}
          >
            <InputNumber size="large" min={1} />
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="w-full mt-6 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </Form.Item>
        </Form>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </main>
    </div>
  );
};

export default Combination;

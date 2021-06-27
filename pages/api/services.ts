import { NextApiRequest, NextApiResponse } from "next";

import { services } from "../../Data";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(services);
};

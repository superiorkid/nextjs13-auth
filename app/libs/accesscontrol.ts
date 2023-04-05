import { AccessControl } from "accesscontrol";

import { Role } from "@prisma/client";

const ac = new AccessControl();
ac.grant(Role.USER)
  .createOwn("article")
  .deleteOwn("article")
  .readAny("article")
  .grant(Role.ADMIN)
  .extend(Role.USER)
  .deleteAny("article")
  .createOwn("post")
  .updateAny("article");

export default ac;

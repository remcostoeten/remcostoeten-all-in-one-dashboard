type UserConfig = {
  extends: string[];
};

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
};

export default Configuration;

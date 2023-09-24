import axios from 'axios';

export default function getRepositories() {
  return axios.get(
    'https://api.github.com/users/Pluz16/repos',
    {
      headers: {
        Authorization: `bearer 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`,
      },
      params: {
        private: true,
        scopes: ['repo', 'public_repo', 'repo:read:commits', 'repo:read:contents'],
      },
    }
  );
}
import React from 'react';
import Repo from './RepoItem';
import PropTypes from 'prop-types';

const Repos = ({repos}) => {
    return repos.map(repo => <Repo repo={repo} key={repo.id} />)
}
Repo.PropTypes = {
    repo: PropTypes.array.isRequired
}

export default Repos

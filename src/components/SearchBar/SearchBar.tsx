import React, { FC, useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import { useBlogs } from '../../store/blogs';
import { useDebounce } from '../../hooks';
import { SearchButtons } from '../SearchButtons';
import { SearchInput } from '../SearchInput';
import { styles } from './SearchBar.style';

type Keys = 'title' | 'author' | 'description' | '';

const SearchBar: FC = () => {
  const { blogs, setBlogSearch, setSearchStatus, activeSearch } = useBlogs();
  const [keySearch, setKeySearch] = useState<Keys>('');
  const [term, setTerm] = useState('');
  const debouncedSearch = useDebounce(term, 300);

  const searchByTerm = useCallback(() => {
    const search = blogs.filter((blog) => {
      if (keySearch === '') return blog;

      return blog[keySearch]
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
    });
    setBlogSearch(search);
  }, [debouncedSearch]);

  useEffect(() => {
    searchByTerm();
  }, [debouncedSearch]);

  return (
    <View style={styles.container}>
      {activeSearch ? (
        <SearchInput
          setKeySearch={setKeySearch}
          setSearchStatus={setSearchStatus}
          setTerm={setTerm}
        />
      ) : (
        <SearchButtons
          setKeySearch={setKeySearch}
          setSearchStatus={setSearchStatus}
        />
      )}
    </View>
  );
};

export default SearchBar;

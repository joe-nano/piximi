import {
  createCategory,
  deleteCategory,
  updateCategoryDescription,
  updateCategoryVisibility
} from './category';
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_DESCRIPTION,
  UPDATE_CATEGORY_VISIBILITY
} from '../constants';

describe('category actions', () => {
  it('should create an action to create a new category', () => {
    const category = {
      description: 'example'
    };

    const expectedAction = {
      type: CREATE_CATEGORY,
      category
    };

    expect(createCategory(category)).toEqual(expectedAction);
  });

  it('should create an action to delete a category', () => {
    const identifier = '16e0e1b8-ae79-46f5-80cf-58e7f8dda344';

    const expectedAction = {
      type: DELETE_CATEGORY,
      identifier
    };

    expect(deleteCategory(identifier)).toEqual(expectedAction);
  });

  it('should create an action to update a category description', () => {
    const identifier = '16e0e1b8-ae79-46f5-80cf-58e7f8dda344';

    const expectedAction = {
      type: UPDATE_CATEGORY_DESCRIPTION,
      identifier: identifier,
      description: 'foo'
    };

    expect(updateCategoryDescription(identifier, 'foo')).toEqual(
      expectedAction
    );
  });

  it('should create an action to toggle a category visibility', () => {
    const identifier = '16e0e1b8-ae79-46f5-80cf-58e7f8dda344';

    const expectedAction = {
      type: UPDATE_CATEGORY_VISIBILITY,
      identifier
    };

    expect(updateCategoryVisibility(identifier)).toEqual(expectedAction);
  });
});

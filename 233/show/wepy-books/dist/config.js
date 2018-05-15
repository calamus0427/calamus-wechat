'use strict';

// ENV
var env = 'production'; // 'development' or 'production'

// WXAPP VERSION
var version = 2.0;

// development and production host
var hosts = {
    development: 'http://localhost:3020',
    production: 'https://www.learningwang.top/books/'

    // apis
};var api = {
    user: {
        /**
         * login api
         * need header:
         * {
         *   'x-wechat-code': code,
         *   'x-wechat-encrypted': encryptedData,
         *   'x-wechat-iv': iv
         * }
         */
        hootBooks: {
            method: 'GET',
            url: '/getHotBooks/'
        },
        login: {
            method: 'GET',
            url: '/weChatLogin/'
        },
        userInfo: {
            method: 'GET',
            url: '/getUserInfoById/'
        },
        editInfo: {
            url: '/finishUserInfo/',
            method: 'PUT'
        },
        findPersonalBooks: {
            url: '/findPersonalBooks/',
            method: 'GET'
        }
    },
    common: {
        hootBooks: {
            method: 'GET',
            url: 'getHotBooks/'
        },
        recommend: {
            method: 'GET',
            url: '/findEveryDayBooks/'
        },
        classify: {
            method: 'GET',
            url: '/findBookTypeById/'
        },
        search: {
            method: 'GET',
            url: '/findBooksByKey/'
        },
        classifyById: {
            method: 'GET',
            url: '/getBooksByTypeid/'
        },
        bookCount: {
            method: 'GET',
            url: '/getBookCaseById/'
        },
        relevant: {
            method: 'GET',
            url: '/getRelativeBooks/'
        },
        getChatMessage: {
            method: 'GET',
            url: '/getChatMessage/'
        }

    },
    lendBook: {
        getLendBooks: {
            method: 'GET',
            url: '/getLendBooks/'
        },
        getBooksFromCar: {
            url: '/getBooksFromCar/',
            method: 'GET'
        },
        isInCar: {
            url: '/isCarTheBook/',
            method: 'GET'
        },
        insertToCar: {
            url: '/insertToCart/',
            method: 'POST'
        },
        deleteBooksFromCar: {
            url: '/deleteBooksFromCar/',
            method: 'DELETE'
        },
        reBorrow: {
            url: '/renewTheBook/',
            method: 'PUT'
        }
    },
    collectBook: {
        getCollectBook: {
            method: 'GET',
            url: '/getCollectBooks/'
        },
        isCollect: {
            method: 'POST',
            url: '/isCollectTheBook/'
        },
        insertOrDeleteCollect: {
            method: 'POST',
            url: '/insertOrDeleteCollect/'
        },
        deleteCollectBooks: {
            method: 'DELETE',
            url: '/deleteCollectBooks/'
        }

    },
    appointBook: {
        getAppointBook: {
            method: 'GET',
            url: '/getAppointBooks/'
        },
        isAppoint: {
            method: 'POST',
            url: '/isAppointTheBook/'
        },
        addSendBookMsg: {
            method: 'POST',
            url: '/addSendBookMsg/'
        },
        addAAppointment: {
            method: 'POST',
            url: '/addAAppointment/'
        },
        cancleAppointBooks: {
            url: '/cancleAppointBooks/',
            method: 'PUT'
        },
        cancelSendBookMsg: {
            url: '/cancelSendBookMsg/',
            method: 'DELETE'
        }
    },
    message: {
        getSendBooks: {
            method: 'GET',
            url: '/getSendBooks/'
        },
        getAllRecentOutDateBooks: {
            method: 'GET',
            url: '/getAllRecentOutDateBooks/'
        },
        getAllOutDateBooks: {
            method: 'GET',
            url: '/getAllOutDateBooks/'
        }
    }

};

module.exports = {
    env: env,
    version: version,
    api: disposeUrl(api, hosts[env])
};

function disposeUrl(obj, prefix) {
    Object.keys(obj).forEach(function (v) {
        if (obj[v].url) {
            obj[v].url = prefix + obj[v].url;
        } else {
            obj[v] = disposeUrl(obj[v], prefix);
        }
    });

    return obj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJ2ZXJzaW9uIiwiaG9zdHMiLCJkZXZlbG9wbWVudCIsInByb2R1Y3Rpb24iLCJhcGkiLCJ1c2VyIiwiaG9vdEJvb2tzIiwibWV0aG9kIiwidXJsIiwibG9naW4iLCJ1c2VySW5mbyIsImVkaXRJbmZvIiwiZmluZFBlcnNvbmFsQm9va3MiLCJjb21tb24iLCJyZWNvbW1lbmQiLCJjbGFzc2lmeSIsInNlYXJjaCIsImNsYXNzaWZ5QnlJZCIsImJvb2tDb3VudCIsInJlbGV2YW50IiwiZ2V0Q2hhdE1lc3NhZ2UiLCJsZW5kQm9vayIsImdldExlbmRCb29rcyIsImdldEJvb2tzRnJvbUNhciIsImlzSW5DYXIiLCJpbnNlcnRUb0NhciIsImRlbGV0ZUJvb2tzRnJvbUNhciIsInJlQm9ycm93IiwiY29sbGVjdEJvb2siLCJnZXRDb2xsZWN0Qm9vayIsImlzQ29sbGVjdCIsImluc2VydE9yRGVsZXRlQ29sbGVjdCIsImRlbGV0ZUNvbGxlY3RCb29rcyIsImFwcG9pbnRCb29rIiwiZ2V0QXBwb2ludEJvb2siLCJpc0FwcG9pbnQiLCJhZGRTZW5kQm9va01zZyIsImFkZEFBcHBvaW50bWVudCIsImNhbmNsZUFwcG9pbnRCb29rcyIsImNhbmNlbFNlbmRCb29rTXNnIiwibWVzc2FnZSIsImdldFNlbmRCb29rcyIsImdldEFsbFJlY2VudE91dERhdGVCb29rcyIsImdldEFsbE91dERhdGVCb29rcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJkaXNwb3NlVXJsIiwib2JqIiwicHJlZml4IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBTUEsTUFBTSxZQUFaLEMsQ0FBeUI7O0FBRXpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFoQjs7QUFFQTtBQUNBLElBQU1DLFFBQVE7QUFDVkMsaUJBQWEsdUJBREg7QUFFVkMsZ0JBQVk7O0FBR2hCO0FBTGMsQ0FBZCxDQU1BLElBQU1DLE1B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b0I7QUFDaEJwQyxvQkFBUSxLQURRO0FBRWhCQyxpQkFBSztBQUZXO0FBVGY7O0FBM0lELENBQVo7O0FBNEpBb0MsT0FBT0MsT0FBUCxHQUFpQjtBQUNiOUMsWUFEYTtBQUViQyxvQkFGYTtBQUdiSSxTQUFLMEMsV0FBVzFDLEdBQVgsRUFBZ0JILE1BQU1GLEdBQU4sQ0FBaEI7QUFIUSxDQUFqQjs7QUFNQSxTQUFTK0MsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQzdCQyxXQUFPQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQXlCLGFBQUs7QUFDMUIsWUFBSUosSUFBSUssQ0FBSixFQUFPNUMsR0FBWCxFQUFnQjtBQUNadUMsZ0JBQUlLLENBQUosRUFBTzVDLEdBQVAsR0FBYXdDLFNBQVNELElBQUlLLENBQUosRUFBTzVDLEdBQTdCO0FBQ0gsU0FGRCxNQUVPO0FBQ0h1QyxnQkFBSUssQ0FBSixJQUFTTixXQUFXQyxJQUFJSyxDQUFKLENBQVgsRUFBbUJKLE1BQW5CLENBQVQ7QUFDSDtBQUNKLEtBTkQ7O0FBUUEsV0FBT0QsR0FBUDtBQUNIIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEVOVlxyXG5jb25zdCBlbnYgPSAncHJvZHVjdGlvbicgLy8gJ2RldmVsb3BtZW50JyBvciAncHJvZHVjdGlvbidcclxuXHJcbi8vIFdYQVBQIFZFUlNJT05cclxuY29uc3QgdmVyc2lvbiA9IDIuMFxyXG5cclxuLy8gZGV2ZWxvcG1lbnQgYW5kIHByb2R1Y3Rpb24gaG9zdFxyXG5jb25zdCBob3N0cyA9IHtcclxuICAgIGRldmVsb3BtZW50OiAnaHR0cDovL2xvY2FsaG9zdDozMDIwJyxcclxuICAgIHByb2R1Y3Rpb246ICdodHRwczovL3d3dy5sZWFybmluZ3dhbmcudG9wL2Jvb2tzLydcclxufVxyXG5cclxuLy8gYXBpc1xyXG5jb25zdCBhcGkgPSB7XHJcbiAgICB1c2VyOiB7XHJcblx0XHQvKipcclxuXHRcdCAqIGxvZ2luIGFwaVxyXG5cdFx0ICogbmVlZCBoZWFkZXI6XHJcblx0XHQgKiB7XHJcblx0XHQgKiAgICd4LXdlY2hhdC1jb2RlJzogY29kZSxcclxuXHRcdCAqICAgJ3gtd2VjaGF0LWVuY3J5cHRlZCc6IGVuY3J5cHRlZERhdGEsXHJcblx0XHQgKiAgICd4LXdlY2hhdC1pdic6IGl2XHJcblx0XHQgKiB9XHJcblx0XHQgKi9cclxuICAgICAgICBob290Qm9va3M6IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnL2dldEhvdEJvb2tzLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2luOiB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogJy93ZUNoYXRMb2dpbi8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1c2VySW5mbzoge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6ICcvZ2V0VXNlckluZm9CeUlkLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVkaXRJbmZvOiB7XHJcbiAgICAgICAgICAgIHVybDogJy9maW5pc2hVc2VySW5mby8nLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kUGVyc29uYWxCb29rczoge1xyXG4gICAgICAgICAgICB1cmw6ICcvZmluZFBlcnNvbmFsQm9va3MvJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21tb246IHtcclxuICAgICAgICBob290Qm9va3M6IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnZ2V0SG90Qm9va3MvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVjb21tZW5kOiB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogJy9maW5kRXZlcnlEYXlCb29rcy8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGFzc2lmeToge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6ICcvZmluZEJvb2tUeXBlQnlJZC8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWFyY2g6IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnL2ZpbmRCb29rc0J5S2V5LydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsYXNzaWZ5QnlJZDoge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6ICcvZ2V0Qm9va3NCeVR5cGVpZC8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib29rQ291bnQ6IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnL2dldEJvb2tDYXNlQnlJZC8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWxldmFudDoge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6ICcvZ2V0UmVsYXRpdmVCb29rcy8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRDaGF0TWVzc2FnZToge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6ICcvZ2V0Q2hhdE1lc3NhZ2UvJ1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSxcclxuICAgIGxlbmRCb29rOiB7XHJcbiAgICAgICAgZ2V0TGVuZEJvb2tzOiB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogJy9nZXRMZW5kQm9va3MvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0Qm9va3NGcm9tQ2FyOiB7XHJcbiAgICAgICAgICAgIHVybDogJy9nZXRCb29rc0Zyb21DYXIvJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNJbkNhcjoge1xyXG4gICAgICAgICAgICB1cmw6ICcvaXNDYXJUaGVCb29rLycsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluc2VydFRvQ2FyOiB7XHJcbiAgICAgICAgICAgIHVybDogJy9pbnNlcnRUb0NhcnQvJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZUJvb2tzRnJvbUNhcjoge1xyXG4gICAgICAgICAgICB1cmw6ICcvZGVsZXRlQm9va3NGcm9tQ2FyLycsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlQm9ycm93OiB7XHJcbiAgICAgICAgICAgIHVybDogJy9yZW5ld1RoZUJvb2svJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb2xsZWN0Qm9vazoge1xyXG4gICAgICAgIGdldENvbGxlY3RCb29rOiB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogJy9nZXRDb2xsZWN0Qm9va3MvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNDb2xsZWN0OiB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICcvaXNDb2xsZWN0VGhlQm9vay8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnNlcnRPckRlbGV0ZUNvbGxlY3Q6IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJy9pbnNlcnRPckRlbGV0ZUNvbGxlY3QvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlQ29sbGVjdEJvb2tzOiB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIHVybDogJy9kZWxldGVDb2xsZWN0Qm9va3MvJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgYXBwb2ludEJvb2s6IHtcclxuICAgICAgICBnZXRBcHBvaW50Qm9vazoge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6ICcvZ2V0QXBwb2ludEJvb2tzLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzQXBwb2ludDoge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnL2lzQXBwb2ludFRoZUJvb2svJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkU2VuZEJvb2tNc2c6IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJy9hZGRTZW5kQm9va01zZy8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRBQXBwb2ludG1lbnQ6IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJy9hZGRBQXBwb2ludG1lbnQvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuY2xlQXBwb2ludEJvb2tzOiB7XHJcbiAgICAgICAgICAgIHVybDogJy9jYW5jbGVBcHBvaW50Qm9va3MvJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuY2VsU2VuZEJvb2tNc2c6e1xyXG4gICAgICAgICAgICB1cmw6ICcvY2FuY2VsU2VuZEJvb2tNc2cvJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXNzYWdlOiB7XHJcbiAgICAgICAgZ2V0U2VuZEJvb2tzOiB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogJy9nZXRTZW5kQm9va3MvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0QWxsUmVjZW50T3V0RGF0ZUJvb2tzOiB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogJy9nZXRBbGxSZWNlbnRPdXREYXRlQm9va3MvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0QWxsT3V0RGF0ZUJvb2tzOiB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogJy9nZXRBbGxPdXREYXRlQm9va3MvJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZW52LFxyXG4gICAgdmVyc2lvbixcclxuICAgIGFwaTogZGlzcG9zZVVybChhcGksIGhvc3RzW2Vudl0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3Bvc2VVcmwob2JqLCBwcmVmaXgpIHtcclxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICBpZiAob2JqW3ZdLnVybCkge1xyXG4gICAgICAgICAgICBvYmpbdl0udXJsID0gcHJlZml4ICsgb2JqW3ZdLnVybFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9ialt2XSA9IGRpc3Bvc2VVcmwob2JqW3ZdLCBwcmVmaXgpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gb2JqXHJcbn1cclxuIl19
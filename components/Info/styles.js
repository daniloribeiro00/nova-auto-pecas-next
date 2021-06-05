import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem 2.5rem 2.5rem 2.5rem;

    .content {
        h1 {
            font-size: 2rem;
            max-width: 16rem;
            line-height: 2.5rem;
        }

        .list {
            margin: 1.5rem 0 2rem 0;
            font-size: 1.2rem;

            li {
                margin: 1.2rem 0;
            }
        }

        p {
            font-size: 1rem;
            line-height: 1.4rem;
            margin: 1rem 0;
        }
    }

    @media (min-width: 700px) {
        margin: 5rem 0;

        .content {
            max-width: 900px;
            margin: 0 auto;

            display: flex;
            justify-content: space-between;

            p {
                margin: 2rem 0 0 0;
            }

            .list {
                margin: 0 1rem 0 0;

                li {
                    margin: 0 0 2rem 0;

                    &:last-child {
                        margin: 0;
                    }
                }
            }
        }

    }
`;